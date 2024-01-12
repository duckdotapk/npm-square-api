# Square API
This is a Node.js package for interacting with the Square API.

## Coverage
The Square API consists of a wide array of individual APIs for interacting for different tasks.

This package currently targets version 2023-12-13 of the Square API. This can be overridden when instantiating the client but this might cause unexpected behaviour.

These tables detail which APIs are supported:

### Dev Essentials

| API Name              | Supported | Webhook Event Types |
|-----------------------|-----------|---------------------|
| OAuth                 | No        | No                  |
| Webhook subscriptions | No        | -                   |

### Payments

| API Name             | Supported | Webhook Event Types |
|----------------------|-----------|---------------------|
| Payments             | No        | No                  |
| Refunds              | No        | No                  |
| Checkout             | No        | No                  |
| Terminal             | No        | No                  |			
| Disputes             | No        | No                  |
| Invoices             | No        | No                  |
| Cards                | No        | No                  |
| Subscriptions        | No        | No                  |
| Bank accounts        | No        | No                  |
| Payouts              | No        | No                  |
| Mobile authorization | No        | -                   |
| Devices              | No        | No                  |
| Apple pay            | No        | -                   |

### Commerce

| API Name                  | Supported | Webhook Event Types |
|---------------------------|-----------|---------------------|
| Orders                    | No        | No                  |
| Order custom attributes   | No        | No                  |
| Catalog                   | No        | No                  |
| Inventory                 | No        | No                  |			
| Bookings                  | No        | No                  |
| Booking custom attributes | No        | No                  |
| Vendors                   | No        | No                  |
| Sites                     | No        | -                   |
| Snippets                  | No        | -                   |
| Cash drawers              | No        | -                   |

### Customers

| API Name                   | Supported | Webhook Event Types |
|----------------------------|-----------|---------------------|
| Customers                  | No        | No                  |
| Customer custom attributes | No        | No                  |
| Customer groups            | No        | -                   |
| Customer segments          | No        | -                   |			
| Loyalty                    | No        | -                   |
| Gift cards                 | Yes       | Yes                 |
| Gift card activities       | Yes       | Yes                 |

### Staff

| API Name | Supported | Webhook Event Types |
|----------|-----------|---------------------|
| Labor    | No        | No                  |
| Team     | No        | No                  |

### Merchants

| API Name                   | Supported | Webhook Event Types |
|----------------------------|-----------|---------------------|
| Merchants                  | No        | -                   |
| Merchant custom attributes | No        | No                  |
| Locations                  | No        | No                  |
| Location custom attributes | No        | No                  |	

## Documentation
Documentation will be coming at a later date.

This package has type definitions which directly correspond to the [Official Documentation](https://developer.squareup.com/reference/square) as much as possible and those should be helpful in the meantime.

## Changelog
See [CHANGELOG.md](https://github.com/duckdotapk/npm-square-api/blob/main/CHANGELOG.md)

## License
[MIT](https://github.com/duckdotapk/npm-square-api/blob/main/LICENSE.md)