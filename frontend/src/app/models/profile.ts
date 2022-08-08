export class Profile {
  education:{
    school? : string;
    degree? : string;
    major?: string;
    from?:string;
    to?: string;
  }
  experience:{
    title?: string;
    company?:string;
    years?:string;
  }
  skills: {
    skill1?: string;
    skill2?: string;
    skill3?: string;
    skill4?: string;
    languages?: string;
  }
  summary:{
    summary?:string;
  }
  careerObjective:{
    objective?:string;
  }
  contact:{
    firstname?: string;
    lastname?: string;
    address?: string;
    city?: string;
    state?: string;
    email?: string;
    phone?: string;
  }
}

