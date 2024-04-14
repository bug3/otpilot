# [Otpilot](https://github.com/bug3/otpilot)

Securely automate otp codes:
    You can use otp codes with any shell command without need phone or app.

## Installation

```bash
npm install -g otpilot
```

## Requirements

First of all we need secret keys to generate otp codes.
- You can do this with [google-author](https://github.com/bug3/google-author) tool.

## Usage

-   **Create a command**

```bash
otpilot create $commandName
```

Output

```bash
Command: echo $otp
Secret: ******
```

-   **Run the command**

```bash
otpilot run $commandName
```

Output

```js
142857
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
