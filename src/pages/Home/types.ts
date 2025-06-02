export type Feature = {
    icon: string;
    title: string;
    description: string;
}

export type Partner = {
    appLogo: string;
    app: string;
    description: string;
    url: string;
}

type Availability = {
    available: boolean;
    addon?: boolean;
}

export type PlanFeature = {
    name: string;
    starter: Availability;
    professional: Availability;
    enterprise: Availability;
}

export type Capabilities = {
    icon: string;
    variant: string;
    title: string;
    description: string;
}

export type Hero = {
    logo: string;
    logoSize?: string;
    bottomImage?: string;
    title: string;
    heading: string;
    backgroundColor: string;
    link: string;
    description: string;
    color?: string;
    more?: string;
}