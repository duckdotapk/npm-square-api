//
// Imports
//

import { SquareClient } from "./SquareClient.js";

import
{
	SquareCreateGiftCardActivityRequestBody,
	SquareCreateGiftCardActivityResponse,
	SquareListGiftCardActivitiesRequestQueryParameters,
	SquareListGiftCardActivitiesResponse,
} from "../types/SquareGiftCardActivityAPIs.js";

//
// Class
//

export interface SquareGiftCardActivitiesAPIClientOptions
{
	squareClient : SquareClient;
}

export class SquareGiftCardActivitiesAPIClient
{
	squareClient : SquareClient;

	constructor(options : SquareGiftCardActivitiesAPIClientOptions)
	{
		this.squareClient = options.squareClient;
	}

	async createGiftCardActivity(body : SquareCreateGiftCardActivityRequestBody)
	{
		return this.squareClient.post<SquareCreateGiftCardActivityRequestBody, SquareCreateGiftCardActivityResponse>(
			{
				path: "/v2/gift-cards/activities",
				body,
			});
	}

	async listGiftCardActivities(queryParameters : SquareListGiftCardActivitiesRequestQueryParameters)
	{
		return this.squareClient.get<SquareListGiftCardActivitiesRequestQueryParameters, SquareListGiftCardActivitiesResponse>(
			{
				path: "/v2/gift-cards/activities",
				queryParameters,
			});
	}
}