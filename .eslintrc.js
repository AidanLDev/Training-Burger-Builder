module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'line-comment-position': 'off',
        'no-console': 'off',
        'no-var': 'off',
        'object-shorthand': 'off',
        'prefer-template': 'off',
        'import/no-commonjs': 'off',
        'import/unambiguous': 'off',
        'import/order': 'off',
        'filenames/match-exported': 'off',
    }
};