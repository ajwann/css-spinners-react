import React from 'react';
import renderer from 'react-test-renderer';

import { Atebits } from '../atebits.js';
import { Ball } from '../ball.js';
import { Circles } from '../circles.js';
import { Dots } from '../dots.js';
import { Echo } from '../echo.js';
import { Flower } from '../flower.js';
import { Gauge } from '../gauge.js';
import { Heartbeat } from '../heartbeat.js';
import { Hexdots } from '../hexdots.js';
import { HolePulse } from '../hole-pulse.js';
import { InnerCircles } from '../inner-circles.js';
import { Plus } from '../plus.js';
import { Pong } from '../pong.js';
import { Pulse } from '../pulse.js';
import { Refreshing } from '../refreshing.js';
import { Spinner } from '../spinner.js';
import { SpinningPixels } from '../spinning-pixels.js';
import { ThreeQuarters } from '../three-quarters.js';
import { Throbber } from '../throbber.js';
import { Timer } from '../timer.js';
import { Whirly } from '../whirly.js';
import { Wobblebar } from '../wobblebar.js';

describe('spinner components', () => {
  it('renders atebits', () => {
    const atebits = renderer.create(<Atebits />).toJSON();
    expect(atebits).toMatchSnapshot();
  });
  it('renders ball', () => {
    const ball = renderer.create(<Ball />).toJSON();
    expect(ball).toMatchSnapshot();
  });
  it('renders circles', () => {
    const circles = renderer.create(<Circles />).toJSON();
    expect(circles).toMatchSnapshot();
  });
  it('renders dots', () => {
    const dots = renderer.create(<Dots />).toJSON();
    expect(dots).toMatchSnapshot();
  });
  it('renders echo', () => {
    const echo = renderer.create(<Echo />).toJSON();
    expect(echo).toMatchSnapshot();
  });
  it('renders flower', () => {
    const flower = renderer.create(<Flower />).toJSON();
    expect(flower).toMatchSnapshot();
  });
  it('renders gauge', () => {
    const gauge = renderer.create(<Gauge />).toJSON();
    expect(gauge).toMatchSnapshot();
  });
  it('renders heartbeat', () => {
    const heartbeat = renderer.create(<Heartbeat />).toJSON();
    expect(heartbeat).toMatchSnapshot();
  });
  it('renders hexdots', () => {
    const hexdots = renderer.create(<Hexdots />).toJSON();
    expect(hexdots).toMatchSnapshot();
  });
  it('renders hole-pulse', () => {
    const holePulse = renderer.create(<HolePulse />).toJSON();
    expect(holePulse).toMatchSnapshot();
  });
  it('renders inner-circles', () => {
    const innerCircles = renderer.create(<InnerCircles />).toJSON();
    expect(innerCircles).toMatchSnapshot();
  });
  it('renders plus', () => {
    const plus = renderer.create(<Plus />).toJSON();
    expect(plus).toMatchSnapshot();
  });
  it('renders pong', () => {
    const pong = renderer.create(<Pong />).toJSON();
    expect(pong).toMatchSnapshot();
  });
  it('renders pulse', () => {
    const pulse = renderer.create(<Pulse />).toJSON();
    expect(pulse).toMatchSnapshot();
  });
  it('renders refreshing', () => {
    const refreshing = renderer.create(<Refreshing />).toJSON();
    expect(refreshing).toMatchSnapshot();
  });
  it('renders spinner', () => {
    const spinner = renderer.create(<Spinner />).toJSON();
    expect(spinner).toMatchSnapshot();
  });
  it('renders spinning-pixels', () => {
    const spinningPixels = renderer.create(<SpinningPixels />).toJSON();
    expect(spinningPixels).toMatchSnapshot();
  });
  it('renders three-quarters', () => {
    const threeQuarters = renderer.create(<ThreeQuarters />).toJSON();
    expect(threeQuarters).toMatchSnapshot();
  });
  it('renders throbber', () => {
    const throbber = renderer.create(<Throbber />).toJSON();
    expect(throbber).toMatchSnapshot();
  });
  it('renders timer', () => {
    const timer = renderer.create(<Timer />).toJSON();
    expect(timer).toMatchSnapshot();
  });
  it('renders whirly', () => {
    const whirly = renderer.create(<Whirly />).toJSON();
    expect(whirly).toMatchSnapshot();
  });
  it('renders wobblebar', () => {
    const wobblebar = renderer.create(<Wobblebar />).toJSON();
    expect(wobblebar).toMatchSnapshot();
  });
});
