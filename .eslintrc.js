module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'prettier',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 2],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-multi-spaces': ['error'],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'react/jsx-props-no-spreading': [0],
        'import/extensions': [0],
        'react/destructuring-assignment': [0],
        'import/no-unresolved': [0],
        'react/require-default-props': [0],
        'jsx-a11y/anchor-is-valid': [0]
    },
};
