//
// Imports
//

import { SquareGiftCardActivity } from "./Square.js";
import { SquareEvent } from "./SquareWebhooks.js";

//
// Types
//

export interface SquareGiftCardActivityCreatedEvent extends SquareEvent
{
	type : "gift_card.activity.created";

	data : SquareGiftCardActivityCreatedEventData;
}

export interface SquareGiftCardActivityCreatedEventData
{
	type : "gift_card_activity";

	id : string;

	object : SquareGiftCardActivityCreatedEventObject;
}

export interface SquareGiftCardActivityCreatedEventObject
{
	gift_card_activity : SquareGiftCardActivity;
}

export interface SquareGiftCardActivityUpdatedEvent extends SquareEvent
{
	type : "gift_card.activity.updated";

	data : SquareGiftCardActivityUpdatedEventData;
}

export interface SquareGiftCardActivityUpdatedEventData
{
	type : "gift_card_activity";

	id : string;

	object : SquareGiftCardActivityUpdatedEventObject;
}

export interface SquareGiftCardActivityUpdatedEventObject
{
	gift_card_activity : SquareGiftCardActivity;
}