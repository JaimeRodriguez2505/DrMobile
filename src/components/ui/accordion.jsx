import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Item
    ref={forwardedRef}
    className={`border-b ${className}`}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
))

export const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={forwardedRef}
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

export const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    ref={forwardedRef}
    className={`data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all ${className}`}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))