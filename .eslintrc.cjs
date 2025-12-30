module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // eslint推荐规则
    'plugin:vue/vue3-essential', // vue3必要规则
    'plugin:@typescript-eslint/recommended', // ts推荐规则
  ],
  overrides: [],
  parser: 'vue-eslint-parser', // 解析器
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', // ts解析器
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'], // 插件
  rules: {
    // 自定义规则
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  globals: {
    // 全局变量
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
