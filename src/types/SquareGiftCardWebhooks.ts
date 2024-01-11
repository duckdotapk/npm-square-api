//
// Imports
//

import { SquareGiftCard } from "./Square.js";
import { SquareEvent } from "./SquareWebhooks.js";

//
// Types
//

export interface SquareGiftCardCreatedEvent extends SquareEvent
{
	type : "gift_card.created";

	data : SquareGiftCardCreatedEventData;
}

export interface SquareGiftCardCreatedEventData
{
	type : "gift_card";

	id : string;

	object : SquareGiftCardCreatedEventObject;
}

export interface SquareGiftCardCreatedEventObject
{
	gift_card : SquareGiftCard;
}

export interface SquareGiftCardCustomerLinkedEvent extends SquareEvent
{
	type : "gift_card.customer_linked";

	data : SquareGiftCardCustomerLinkedEventData;
}

export interface SquareGiftCardCustomerLinkedEventData
{
	type : "gift_card";

	id : string;

	object : SquareGiftCardCustomerLinkedEventObject;
}

export interface SquareGiftCardCustomerLinkedEventObject
{
	gift_card : SquareGiftCard;

	linked_customer_id : string;
}

export interface SquareGiftCardCustomerUnlinkedEvent extends SquareEvent
{
	type : "gift_card.customer_unlinked";

	data : SquareGiftCardCustomerUnlinkedEventData;
}

export interface SquareGiftCardCustomerUnlinkedEventData
{
	type : "gift_card";

	id : string;

	object : SquareGiftCardCustomerUnlinkedEventObject;
}

export interface SquareGiftCardCustomerUnlinkedEventObject
{
	gift_card : SquareGiftCard;

	unlinked_customer_id : string;
}

export interface SquareGiftCardUpdatedEvent extends SquareEvent
{
	type : "gift_card.updated";

	data : SquareGiftCardUpdatedEventData;
}

export interface SquareGiftCardUpdatedEventData
{
	type : "gift_card";

	id : string;

	object : SquareGiftCardUpdatedEventObject;
}

export interface SquareGiftCardUpdatedEventObject
{
	gift_card : SquareGiftCard;
}