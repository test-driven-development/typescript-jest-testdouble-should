import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

import { should } from 'should'


describe('AppComponent', () => {
  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)

    const app = fixture.debugElement.componentInstance
    app.should.be.ok()
  })

  it(`should have as title 'angular7-jest-testdouble-should'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    app.title.should.equal('angular7-jest-testdouble-should')
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const element = fixture.debugElement.nativeElement
    element.querySelector('h1').textContent.should.containEql('Welcome to angular7-jest-testdouble-should!')
  })
})
