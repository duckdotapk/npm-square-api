//
// Imports
//

import { SquareGiftCard, SquareGiftCardStatus, SquareGiftCardType } from "./Square.js";

//
// Types
//

export interface SquareCreateGiftCardRequestBody
{
	idempotency_key : string;

	location_id : string;

	gift_card : Omit<SquareGiftCard, "id" | "balance_money" | "created_at">;
}

export interface SquareCreateGiftCardResponse
{
	gift_card : SquareGiftCard;
}

export interface SquareLinkCustomerToGiftCardRequestBody
{
	customer_id : string;
}

export interface SquareLinkCustomerToGiftCardResponse
{
	gift_card : SquareGiftCard;
}

export interface SquareListGiftCardsRequestQueryParameters
{
	type? : SquareGiftCardType;

	state? : SquareGiftCardStatus;

	limit? : number;

	cursor? : string;

	customer_id? : string;
}

export interface SquareListGiftCardsResponse
{
	gift_cards : SquareGiftCard[];

	cursor? : string;
}

export interface SquareRetrieveGiftCardFromGANRequestBody
{
	gan : string;
}

export interface SquareRetrieveGiftCardFromGANResponse
{
	gift_card : SquareGiftCard;
}

export interface SquareRetrieveGiftCardFromNonceRequestBody
{
	nonce : string;
}

export interface SquareRetrieveGiftCardFromNonceResponse
{
	gift_card : SquareGiftCard;
}

export interface SquareRetrieveGiftCardResponse
{
	gift_card : SquareGiftCard;
}

export interface SquareUnlinkCustomerFromGiftCardRequestBody
{
	customer_id : string;
}

export interface SquareUnlinkCustomerFromGiftCardResponse
{
	gift_card : SquareGiftCard;
}