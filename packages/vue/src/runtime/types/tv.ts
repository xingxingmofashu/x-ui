import type { ClassValue } from 'tailwind-variants'

type Id<T> = {} & { [P in keyof T]: T[P] }

type ComponentVariants<T extends { variants?: Record<string, Record<string, any>> }> = {
  [K in keyof T['variants']]: keyof T['variants'][K]
}

type ComponentSlots<T extends { slots?: Record<string, any> }> = Id<{
  [K in keyof T['slots']]?: ClassValue
}>

type ComponentUI<T extends { slots?: Record<string, any> }> = Id<{
  [K in keyof Required<T['slots']>]: (props?: Record<string, any>) => string
}>

export type ComponentConfig<T extends Record<string, any>> = {
  variants: ComponentVariants<T>
  slots: ComponentSlots<T>
  ui: ComponentUI<T>
}
