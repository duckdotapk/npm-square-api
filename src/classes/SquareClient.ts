//
// Imports
//

import { SquareErrorResponse } from "../types/SquareAPI.js";

//
// Class
//

export interface SquareClientOptions
{
	accessToken : string;

	baseUrl? : string;

	squareVersion? : string;
}

export interface SquareClientGetOptions<SquareRequestQueryParameters>
{
	path : string;

	queryParameters? : SquareRequestQueryParameters;
}

export interface SquareClientPostOptions<SquareRequestBody>
{
	path : string;

	body : SquareRequestBody;
}

export class SquareClient
{
	accessToken : string;

	baseUrl : string;

	squareVersion : string;

	constructor(options : SquareClientOptions)
	{
		this.accessToken = options.accessToken;

		this.baseUrl = options.baseUrl ?? "https://connect.squareup.com";

		this.squareVersion = options.squareVersion ?? "2023-12-13";
	}

	async get<SquareRequestQueryParameters, SquareResponse>(options : SquareClientGetOptions<SquareRequestQueryParameters>) : Promise<SquareErrorResponse | SquareResponse>
	{
		let url = this.baseUrl + options.path;

		if (options.queryParameters != null)
		{
			const urlSearchParams = new URLSearchParams(options.queryParameters);

			url += "?" + urlSearchParams.toString();
		}

		const response = await fetch(url,
			{
				method: "GET",
				headers:
					{
						"Square-Version": this.squareVersion,
						"Authorization": "Bearer " + this.accessToken,
						"Content-Type": "application/json",
					},
			});

		return await response.json() as SquareErrorResponse | SquareResponse;
	}

	async post<SquareRequestBody, SquareResponse>(options : SquareClientPostOptions<SquareRequestBody>) : Promise<SquareErrorResponse | SquareResponse>
	{
		const url = this.baseUrl + options.path;

		const response = await fetch(url,
			{
				method: "POST",
				headers:
					{
						"Square-Version": this.squareVersion,
						"Authorization": "Bearer " + this.accessToken,
						"Content-Type": "application/json",
					},
				body: JSON.stringify(options.body),
			});

		return await response.json() as SquareErrorResponse | SquareResponse;
	}
}