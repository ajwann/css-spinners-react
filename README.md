[![Build Status](https://travis-ci.org/ajwann/css-spinners-react.svg?branch=master)](https://travis-ci.org/ajwann/css-spinners-react)
[![npm version](https://badge.fury.io/js/css-spinners-react.svg)](https://badge.fury.io/js/css-spinners-react)

This is a zero-dependency React adaptation of John W. Long's (jlong) [css-spinners](https://github.com/jlong/css-spinners) library. It should work on any platform that supports css animations.

# Usage

## Install from NPM
```bash
npm install css-spinners-react
```

## Import the spinner components

### Import all the spinners in a namespaced fashion
You can import all the spinners at once:
```js
import * as Spinners from 'css-spinners-react';
```
and use them in a namespaced manner:
```js
<Spinners.Dots />
```

### Import an individual spinner 
You can also import a single loader:
```js
import { Dots } from 'css-spinners-react'
```
and use it without any fancy namespacing:
```js
<Dots />
```

## Components

```<Atebits />```

```<Ball />```

```<Circles />```

```<Dots />```

```<Echo />```

```<Flower />```

```<Gauge />```

```<Heartbeat />```

```<Hexdots />```

```<HolePulse />```

```<InnerCircles />```

```<Plus />```

```<Pong />```

```<Pulse />```

```<Refreshing />```

```<Spinner />```

```<SpinningPixels />```

```<ThreeQuarters />```

```<Throbber />```

```<Timer />```

```<Whirly />```

```<Wobblebar />```
