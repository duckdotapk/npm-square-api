//
// Types
//

/** @see https://developer.squareup.com/reference/square/objects/Currency */
export type SquareCurrency = "UNKNOWN_CURRENCY" | "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYR" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" |"CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" |"FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" |"HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" |"JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" |"KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" |"MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MUR" | "MVR" |"MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" |"NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" |"RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" |"SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "SVC" | "SYP" | "SZL" | "THB" |"TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" |"USD" | "USN" | "USS" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" |"XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" |"XPD" | "XPF" | "XPT" | "XTS" | "XXX" | "YER" | "ZAR" | "ZMK" | "ZMW" | "BTC" |"XUS";

/** @see https://developer.squareup.com/reference/square/objects/Error */
export interface SquareError
{
	category : SquareErrorCategory;

	code : SquareErrorCode;

	detail? : string;

	field? : string;
}

/** @see https://developer.squareup.com/reference/square/objects/ErrorCategory */
export type SquareErrorCategory = "API_ERROR" | "AUTHENTICATION_ERROR" | "INVALID_REQUEST_ERROR" | "RATE_LIMIT_ERROR" | "PAYMENT_METHOD_ERROR" | "REFUND_ERROR" | "MERCHANT_SUBSCRIPTION_ERROR" | "EXTERNAL_VENDOR_ERROR";

/** @see https://developer.squareup.com/reference/square/objects/ErrorCode */
export type SquareErrorCode = "INTERNAL_SERVER_ERROR" | "UNAUTHORIZED" | "ACCESS_TOKEN_EXPIRED" | "ACCESS_TOKEN_REVOKED" | "CLIENT_DISABLED" | "FORBIDDEN" | "INSUFFICIENT_SCOPES" | "APPLICATION_DISABLED" | "V1_APPLICATION" | "V1_ACCESS_TOKEN" | "CARD_PROCESSING_NOT_ENABLED" | "MERCHANT_SUBSCRIPTION_NOT_FOUND" | "BAD_REQUEST" | "MISSING_REQUIRED_PARAMETER" | "INCORRECT_TYPE" | "INVALID_TIME" | "INVALID_TIME_RANGE" | "INVALID_VALUE" | "INVALID_CURSOR" | "UNKNOWN_QUERY_PARAMETER" | "CONFLICTING_PARAMETERS" | "EXPECTED_JSON_BODY" | "INVALID_SORT_ORDER" | "VALUE_REGEX_MISMATCH" | "VALUE_TOO_SHORT" | "VALUE_TOO_LONG" | "VALUE_TOO_LOW" | "VALUE_TOO_HIGH" | "VALUE_EMPTY" | "ARRAY_LENGTH_TOO_LONG" | "ARRAY_LENGTH_TOO_SHORT" | "ARRAY_EMPTY" | "EXPECTED_BOOLEAN" | "EXPECTED_INTEGER" | "EXPECTED_FLOAT" | "EXPECTED_STRING" | "EXPECTED_OBJECT" | "EXPECTED_ARRAY" | "EXPECTED_MAP" | "EXPECTED_BASE64_ENCODED_BYTE_ARRAY" | "INVALID_ARRAY_VALUE" | "INVALID_ENUM_VALUE" | "INVALID_CONTENT_TYPE" | "INVALID_FORM_VALUE" | "CUSTOMER_NOT_FOUND" | "ONE_INSTRUMENT_EXPECTED" | "NO_FIELDS_SET" | "TOO_MANY_MAP_ENTRIES" | "MAP_KEY_LENGTH_TOO_SHORT" | "MAP_KEY_LENGTH_TOO_LONG" | "CUSTOMER_MISSING_NAME" | "CUSTOMER_MISSING_EMAIL" | "INVALID_PAUSE_LENGTH" | "INVALID_DATE" | "UNSUPPORTED_COUNTRY" | "UNSUPPORTED_CURRENCY" | "APPLE_TTP_PIN_TOKEN" | "CARD_EXPIRED" | "INVALID_EXPIRATION" | "INVALID_EXPIRATION_YEAR" | "INVALID_EXPIRATION_DATE" | "UNSUPPORTED_CARD_BRAND" | "UNSUPPORTED_ENTRY_METHOD" | "INVALID_ENCRYPTED_CARD" | "INVALID_CARD" | "PAYMENT_AMOUNT_MISMATCH" | "GENERIC_DECLINE" | "CVV_FAILURE" | "ADDRESS_VERIFICATION_FAILURE" | "INVALID_ACCOUNT" | "CURRENCY_MISMATCH" | "INSUFFICIENT_FUNDS" | "INSUFFICIENT_PERMISSIONS" | "CARDHOLDER_INSUFFICIENT_PERMISSIONS" | "INVALID_LOCATION" | "TRANSACTION_LIMIT" | "VOICE_FAILURE" | "PAN_FAILURE" | "EXPIRATION_FAILURE" | "CARD_NOT_SUPPORTED" | "INVALID_PIN" | "MISSING_PIN" | "MISSING_ACCOUNT_TYPE" | "INVALID_POSTAL_CODE" | "INVALID_FEES" | "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED" | "PAYMENT_LIMIT_EXCEEDED" | "GIFT_CARD_AVAILABLE_AMOUNT" | "ACCOUNT_UNUSABLE" | "BUYER_REFUSED_PAYMENT" | "DELAYED_TRANSACTION_EXPIRED" | "DELAYED_TRANSACTION_CANCELED" | "DELAYED_TRANSACTION_CAPTURED" | "DELAYED_TRANSACTION_FAILED" | "CARD_TOKEN_EXPIRED" | "CARD_TOKEN_USED" | "AMOUNT_TOO_HIGH" | "UNSUPPORTED_INSTRUMENT_TYPE" | "REFUND_AMOUNT_INVALID" | "REFUND_ALREADY_PENDING" | "PAYMENT_NOT_REFUNDABLE" | "REFUND_DECLINED" | "INSUFFICIENT_PERMISSIONS_FOR_REFUND" | "INVALID_CARD_DATA" | "SOURCE_USED" | "SOURCE_EXPIRED" | "UNSUPPORTED_LOYALTY_REWARD_TIER" | "LOCATION_MISMATCH" | "IDEMPOTENCY_KEY_REUSED" | "UNEXPECTED_VALUE" | "SANDBOX_NOT_SUPPORTED" | "INVALID_EMAIL_ADDRESS" | "INVALID_PHONE_NUMBER" | "CHECKOUT_EXPIRED" | "BAD_CERTIFICATE" | "INVALID_SQUARE_VERSION_FORMAT" | "API_VERSION_INCOMPATIBLE" | "CARD_PRESENCE_REQUIRED" | "UNSUPPORTED_SOURCE_TYPE" | "CARD_MISMATCH" | "PLAID_ERROR" | "PLAID_ERROR_ITEM_LOGIN_REQUIRED" | "PLAID_ERROR_RATE_LIMIT" | "CARD_DECLINED" | "VERIFY_CVV_FAILURE" | "VERIFY_AVS_FAILURE" | "CARD_DECLINED_CALL_ISSUER" | "CARD_DECLINED_VERIFICATION_REQUIRED" | "BAD_EXPIRATION" | "CHIP_INSERTION_REQUIRED" | "ALLOWABLE_PIN_TRIES_EXCEEDED" | "RESERVATION_DECLINED" | "UNKNOWN_BODY_PARAMETER" | "NOT_FOUND" | "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND" | "METHOD_NOT_ALLOWED" | "NOT_ACCEPTABLE" | "REQUEST_TIMEOUT" | "CONFLICT" | "GONE" | "REQUEST_ENTITY_TOO_LARGE" | "UNSUPPORTED_MEDIA_TYPE" | "UNPROCESSABLE_ENTITY" | "RATE_LIMITED" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "TEMPORARY_ERROR" | "GATEWAY_TIMEOUT";

/** @see https://developer.squareup.com/reference/square/objects/GiftCard */
export interface SquareGiftCard
{
	id : string;

	type : SquareGiftCardType;

	gan_source : SquareGiftCardGANSource;

	state : SquareGiftCardStatus;

	balance_money : SquareMoney;

	gan : string;

	created_at : string;

	customer_ids : string[];
}

/** @see https://developer.squareup.com/reference/square/objects/GiftCardGANSource */
export type SquareGiftCardGANSource = "SQUARE" | "OTHER";

/** @see https://developer.squareup.com/reference/square/objects/GiftCardStatus */
export type SquareGiftCardStatus = "ACTIVE" | "DEACTIVATED" | "BLOCKED" | "PENDING";

/** @see https://developer.squareup.com/reference/square/objects/GiftCardType */
export type SquareGiftCardType = "DIGITAL" | "PHYSICAL";

/** @see https://developer.squareup.com/reference/square/objects/Money */
export interface SquareMoney
{
	amount : number;

	currency : SquareCurrency;
}