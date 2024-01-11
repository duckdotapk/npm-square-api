//
// Imports
//

import { SquareClient } from "./SquareClient.js";

import
{
	SquareCreateGiftCardRequestBody,
	SquareCreateGiftCardResponse,
	SquareListGiftCardsRequestQueryParameters,
	SquareListGiftCardsResponse,
	SquareRetrieveGiftCardFromGANRequestBody,
	SquareRetrieveGiftCardFromGANResponse,
	SquareRetrieveGiftCardFromNonceRequestBody,
	SquareRetrieveGiftCardFromNonceResponse,
	SquareRetrieveGiftCardResponse,
	SquareLinkCustomerToGiftCardRequestBody,
	SquareLinkCustomerToGiftCardResponse,
	SquareUnlinkCustomerFromGiftCardRequestBody,
	SquareUnlinkCustomerFromGiftCardResponse,
} from "../types/SquareGiftCardAPIs.js";

//
// Class
//

export interface SquareGiftCardsAPIClientOptions
{
	squareClient : SquareClient;
}

export class SquareGiftCardsAPIClient
{
	squareClient : SquareClient;

	constructor(options : SquareGiftCardsAPIClientOptions)
	{
		this.squareClient = options.squareClient;
	}

	async createGiftCard(body : SquareCreateGiftCardRequestBody)
	{
		return await this.squareClient.post<SquareCreateGiftCardRequestBody, SquareCreateGiftCardResponse>(
			{
				path: "/v2/gift-cards",
				body,
			});
	}

	async linkCustomerToGiftCard(gift_card_id : string, body : SquareLinkCustomerToGiftCardRequestBody)
	{
		return this.squareClient.post<SquareLinkCustomerToGiftCardRequestBody, SquareLinkCustomerToGiftCardResponse>(
			{
				path: "/v2/gift-cards/" + gift_card_id + "/link-customer",
				body,
			});
	}

	async listGiftCards(queryParameters : SquareListGiftCardsRequestQueryParameters = {})
	{
		return await this.squareClient.get<SquareListGiftCardsRequestQueryParameters, SquareListGiftCardsResponse>(
			{
				path: "/v2/gift-cards",
				queryParameters,
			});
	}

	async retrieveGiftCard(id : string)
	{
		return this.squareClient.get<null, SquareRetrieveGiftCardResponse>(
			{
				path: "/v2/gift-cards/" + id,
			});
	}

	async retrieveGiftCardFromGAN(body : SquareRetrieveGiftCardFromGANRequestBody)
	{
		return await this.squareClient.post<SquareRetrieveGiftCardFromGANRequestBody, SquareRetrieveGiftCardFromGANResponse>(
			{
				path: "/v2/gift-cards/from-gan",
				body,
			});
	}

	async retrieveGiftCardFromNonce(body : SquareRetrieveGiftCardFromNonceRequestBody)
	{
		return await this.squareClient.post<SquareRetrieveGiftCardFromNonceRequestBody, SquareRetrieveGiftCardFromNonceResponse>(
			{
				path: "/v2/gift-cards/from-nonce",
				body,
			});
	}

	async unlinkCustomerFromGiftCard(gift_card_id : string, body : SquareUnlinkCustomerFromGiftCardRequestBody)
	{
		return this.squareClient.post<SquareUnlinkCustomerFromGiftCardRequestBody, SquareUnlinkCustomerFromGiftCardResponse>(
			{
				path: "/v2/gift-cards/" + gift_card_id + "/unlink-customer",
				body,
			});
	}
}