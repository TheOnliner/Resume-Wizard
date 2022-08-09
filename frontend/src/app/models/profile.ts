export class Education {
    school? : string;
    degree? : string;
    major?: string;
    from?:string;
    to?: string;
}

export class Experience {
  title?: string;
  company?:string;
  description?: string;
  from?:string;
  to?: string;
}

export class Skills {
  skill1?: string;
  skill2?: string;
  skill3?: string;
  skill4?: string;
  language?: string;
}

export class professionalSummary{
  summary?:string;
}

export class careerObjective{
  objective?:string;
}

export class contact{
  firstname?: string;
  lastname?: string;
  address?: string;
  city?: string;
  state?: string;
  email?: string;
  phone?: string;
}

export class template{
  selection?: number
}


export class Profile {
  id?: string;
  education?:[Education]
  experience?:[Experience]
  skills?: [Skills]
  professionalSummary?:[professionalSummary]
  careerObjective?:[careerObjective]
  contact?:[contact]
  template?:[template]
}