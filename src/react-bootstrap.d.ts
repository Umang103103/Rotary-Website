// Type declarations for react-bootstrap
declare module "react-bootstrap" {
  import * as React from "react";

  export interface ContainerProps {
    fluid?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export interface RowProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface ColProps {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
    className?: string;
    children?: React.ReactNode;
  }

  export interface CardProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface CardImgProps {
    variant?: "top" | "bottom";
    src?: string;
    alt?: string;
    className?: string;
  }

  export interface CardBodyProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface CardTitleProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface CardTextProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface NavbarProps {
    bg?: string;
    expand?: "sm" | "md" | "lg" | "xl";
    fixed?: "top" | "bottom";
    className?: string;
    expanded?: boolean;
    children?: React.ReactNode;
  }

  export interface NavbarBrandProps {
    as?: React.ElementType;
    to?: string;
    className?: string;
    children?: React.ReactNode;
  }

  export interface NavbarToggleProps {
    "aria-controls"?: string;
    onClick?: () => void;
    "aria-label"?: string;
  }

  export interface NavbarCollapseProps {
    id?: string;
    children?: React.ReactNode;
  }

  export interface NavProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface NavLinkProps {
    as?: React.ElementType;
    to?: string;
    onClick?: () => void;
    end?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export interface FormProps {
    onSubmit?: (e: React.FormEvent) => void;
    className?: string;
    children?: React.ReactNode;
  }

  export interface FormGroupProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface FormLabelProps {
    className?: string;
    children?: React.ReactNode;
  }

  export interface FormControlProps {
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    required?: boolean;
    as?: React.ElementType;
    rows?: number;
    className?: string;
  }

  export interface ButtonProps {
    variant?: string;
    type?: "button" | "submit" | "reset";
    size?: "sm" | "lg";
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export interface SpinnerProps {
    animation?: "border" | "grow";
    role?: string;
    variant?: string;
    className?: string;
    children?: React.ReactNode;
  }

  export interface CarouselProps {
    activeIndex?: number;
    onSelect?: (selectedIndex: number) => void;
    className?: string;
    fade?: boolean;
    children?: React.ReactNode;
  }

  export interface CarouselItemProps {
    className?: string;
    children?: React.ReactNode;
  }

  export class Container extends React.Component<ContainerProps> {}
  export class Row extends React.Component<RowProps> {}
  export class Col extends React.Component<ColProps> {}

  export class Card extends React.Component<CardProps> {
    static Img: React.FC<CardImgProps>;
    static Body: React.FC<CardBodyProps>;
    static Title: React.FC<CardTitleProps>;
    static Text: React.FC<CardTextProps>;
  }

  export class Navbar extends React.Component<NavbarProps> {
    static Brand: React.FC<NavbarBrandProps>;
    static Toggle: React.FC<NavbarToggleProps>;
    static Collapse: React.FC<NavbarCollapseProps>;
  }

  export class Nav extends React.Component<NavProps> {
    static Link: React.FC<NavLinkProps>;
  }

  export class Form extends React.Component<FormProps> {
    static Group: React.FC<FormGroupProps>;
    static Label: React.FC<FormLabelProps>;
    static Control: React.FC<FormControlProps>;
  }

  export class Button extends React.Component<ButtonProps> {}
  export class Spinner extends React.Component<SpinnerProps> {}
  export class Carousel extends React.Component<CarouselProps> {
    static Item: React.FC<CarouselItemProps>;
  }
}
