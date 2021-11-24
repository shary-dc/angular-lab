# Setup your Angular environment

> :rocket: VS Code is already installed in your lab environment.

## Install npm/node

1. Download and install using the link : [Node.js](https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi)
2. No setup configuration is required here so feel free to click **Next** until it is successfully installed
3. Confirm the installation by opening a terminal window and running the below commands. If everything is okay, this will output the version of Node and npm installed on your machine.

```console
node -v
```

```console
npm -v
```

## Install Angular

1. Open a terminal window and run:

```console
npm install -g @angular/cli
```

2. Confirm the installation by opening a terminal window and running the below command. If everything is okay, this will output the version of Angular installed on your machine.

```console
ng v
```

## Create a new Angular workspace

1. Open a terminal window and run the CLI command:

```console
ng new playground
```

2. Would you like to add Angular routing ? **Type y**

3. Which stylesheet format would you like to use? (Use arrow keys) **Select CSS**

4. Open your new workspace from VS Code, open a new Terminal from within and serve your new application by running:

```console
ng serve --open
```
