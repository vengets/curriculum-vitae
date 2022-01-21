export class Profile {
    constructor(public name: string,
                public designation: string,
                public summary: string,
                public phone: string,
                public email: string,
                public experience: Experience[],
                public education: Education[],
                public skill: Skill[],
                public certification: Certification[]) {
    }

}

export class Experience {
    constructor(public company: string,
                public location: string,
                public designation: string,
                public workingFrom: string,
                public workingTill: string,
                public description: string[]) {
    }

}

export class Education {
    constructor(public college: string,
                public location: string,
                public yearOfPassing: string,
                public degree: string) {
    }

}

export class Skill {
    constructor( public name: string,
                 public description?: string) {
    }
}

export class Certification {
    constructor( public name: string) {
    }
}
