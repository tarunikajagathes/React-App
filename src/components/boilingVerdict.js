export function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water woud boil.</p>;
  } else {
    return <p>The water will not boil.</p>;
  }
}

export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
