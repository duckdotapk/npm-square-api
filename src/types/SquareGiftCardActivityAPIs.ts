//
// Imports
//

import { SquareGiftCardActivity, SquareGiftCardActivityType } from "./Square.js";

//
// Types
//

export interface SquareCreateGiftCardActivityRequestBody
{
	idempotency_key : string;

	gift_card_activity : Omit<SquareGiftCardActivity, "id" | "created_at" | "gift_card_balance_money" | "import_activity_details" | "block_activity_details" | "unblock_activity_details" | "import_reversal_activity_details" | "transfer_balance_to_activity_details" | "transfer_balance_from_activity_details">;
}

export interface SquareCreateGiftCardActivityResponse
{
	gift_card_activity : SquareGiftCardActivity;
}

export interface SquareListGiftCardActivitiesRequestQueryParameters
{
	gift_card_id? : string;

	type? : SquareGiftCardActivityType;

	location_id? : string;

	begin_time? : string;

	end_time? : string;

	limit? : string;

	cursor? : string;

	sortOrder? : "ASC" | "DESC";
}

export interface SquareListGiftCardActivitiesResponse
{
	gift_card_activities : SquareGiftCardActivity[];

	cursor? : string;
}