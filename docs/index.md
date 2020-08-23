# consoletolog

A dependency to save your js console logs to a file with Node JS

## Example

```bash
npm i consoletolog

ctl --name=cool-process
```
That will create a directory tree, change your package.json, and will output something like this

```bash
                             _      _        _
    ___ ___  _ __  ___  ___ | | ___| |_ ___ | | ___   __ _
   / __/ _ \| '_ \/ __|/ _ \| |/ _ \ __/ _ \| |/ _ \ / _  |
  | (_| (_) | | | \__ \ (_) | |  __/ || (_) | | (_) | (_| |
   \___\___/|_| |_|___/\___/|_|\___|\__\___/|_|\___/ \__, |
                                                     |___/

Proceso creado!

Run the process as - npm run cool-process

```

```bash
└── cool-process
    ├── logs
    ├── run.js
    └── cool-process.js
```

```json
// package.json

"scripts": {
    "cool-process": "node ./cool-process/run.js"
 },
 ```

Then, after running that command it will add a log file

```bash
└── cool-process
    ├── logs
    │   └── 21-08-2020_09-58-51.txt
    ├── run.js
    └── cool-process.js
```
