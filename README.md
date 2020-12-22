# Charts.css

![GitHub Version](https://img.shields.io/github/v/release/ChartsCSS/charts.css?style=for-the-badge) ![Minified Size](https://img.shields.io/bundlephobia/min/charts.css?style=for-the-badge) ![License](https://img.shields.io/github/license/ChartsCSS/charts.css?style=for-the-badge)

**Charts.css is an open source CSS framework for data visualization.**

Visualization help end-users understand data. **Charts.css** help frontend developers turn data into beautiful charts and graphs using simple **CSS classes**.

## Documentation

Check the full documentation on [ChartsCSS.org](https://ChartsCSS.org/).

* [Get Started](https://chartscss.org/docs/)
* [Components](https://chartscss.org/components/)
* [Charts](https://chartscss.org/charts/)
* [Customization](https://chartscss.org/customization/)
* [Development](https://chartscss.org/development/)
* [Examples](https://chartscss.org/examples/)

## Installation

### CDN

Use [jsdelivr](https://www.jsdelivr.com/package/npm/charts.css) CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
```

Or [unpkg](https://unpkg.com/browse/charts.css/) CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
```

### Package Manager

Install using [npm](https://www.npmjs.com/package/charts.css):

```bash
npm install charts.css
```

Or using [yarn](https://classic.yarnpkg.com/en/package/charts.css):

```bash
yarn add charts.css
```

## Usage

The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.

```html
<table class="charts-css [ column ] [ show-primary-axis show-4-secondary-axes ] [ data-spacing-4 reverse-data ]">

  <caption> Front End Developer Salary </caption>

  <thead>
    <tr>
      <th scope="col"> Year </th>
      <th scope="col"> Income </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row"> 2016 </th>
      <td style="--size: calc( 40 / 100 );"> $ 40K </td>
    </tr>
    <tr>
      <th scope="row"> 2017 </th>
      <td style="--size: calc( 60 / 100 );"> $ 60K </td>
    </tr>
    <tr>
      <th scope="row"> 2018 </th>
      <td style="--size: calc( 75 / 100 );"> $ 75K </td>
    </tr>
    <tr>
      <th scope="row"> 2019 </th>
      <td style="--size: calc( 90 / 100 );"> $ 90K </td>
    </tr>
    <tr>
      <th scope="row"> 2020 </th>
      <td style="--size: calc( 100 / 100 );"> $ 100K <br> 👑 </td>
    </tr>
  </tbody>

</table>
```

The framework offers developers flexibility. You choose what components to display and how to style them. Each component offers several CSS classes and CSS variables to customizes your style.

The key feature is the ability to customize everything using basic CSS. Frontend developers can target any HTML element and customize it. This philosophical guideline is what makes the framework so flexible, easy and fun to use.

## License

Charts.css is licensed under the [MIT license](https://opensource.org/licenses/MIT).
