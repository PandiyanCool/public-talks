# multiply-by-two-test

## Installation

To install this library, run:

```bash
$ npm install multiply-by-two-test --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install multiply-by-two-test
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { MultiplyPipe } from 'multiply-by-two-test';

@NgModule({
  declarations: [
    AppComponent,
    MultiplyPipe
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{target | multiplyPipe}}
</h1>
<demoComponent></demoComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Pandiyan](mailto:pandiyanit7@gmail.com)
