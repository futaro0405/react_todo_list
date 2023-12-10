module.exports = {
  plugins: ["stylelint-scss", "stylelint-order"],
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
  rules: {
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/percent-placeholder-pattern": null,
    "scss/at-extend-no-missing-placeholder": null,
    "function-url-quotes": ["always", { severity: "warning" }],
    "number-max-precision": [3, { severity: "warning" }],
    "alpha-value-notation": ["number", { severity: "warning" }],
    "font-family-name-quotes": [
      "always-where-recommended",
      { severity: "warning" }
    ],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["appearance", "text-size-adjust"]
      }
    ]
  }
};
