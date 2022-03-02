import { CarType, Rental } from "./logics/rental"

const sedanMinusBtn = document.querySelector('#sedanMinusBtn') as HTMLButtonElement
const sedanPlusBtn = document.querySelector('#sedanPlusBtn') as HTMLButtonElement
const sedanText = document.querySelector('#sedanText') as HTMLSpanElement

const rental = new Rental(CarType.Sedan, 0)

let counter = 0
sedanMinusBtn.addEventListener('click', (ev: Event) => {
    counter--
    const rental = new Rental(CarType.Sedan, counter)
    sedanText.innerText = rental.getPrice().toString()
})

sedanPlusBtn.addEventListener('click', (ev: Event) => {
    counter++
    const rental = new Rental(CarType.Sedan, counter)
    sedanText.innerText = rental.getPrice().toString()
})


const plusBtn = (anchor: HTMLButtonElement, span: HTMLSpanElement) => {
    let counter = 0
    anchor
}