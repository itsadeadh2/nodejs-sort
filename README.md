
# Node.js Project

## Project Structure

```
src/
│
├── domain/          # Contains the domain logic of the application
├── infrastructure/  # Infrastructure related code such as database and services
├── lambda.js        # Lambda function entry point
└── local.js         # Local development entry point
```

## Installation

1. Clone the repository:
```sh
git clone <repository-url>
```

2. Navigate to the project directory:
```sh
cd src
```

3. Install dependencies:
```sh
npm install
```

## Usage

### Running Locally

To run the project locally, use:
```sh
node local.js
```

### Running on Lambda

Make sure to configure the handler as [lambda.js](src/lambda.js)
