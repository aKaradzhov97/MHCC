export class Job {
  constructor(
    public id: string,
    public title: string,
    public zip_code: string,
    public city: string,
    public thumbnail: string,
    public attachments: string[],

    public counter: object,

    public is_awarded: boolean,

    public categories: object[],

    public state: string,
    public description: string,
    public end_date: Date,
    public created_at: Date,
  ) { }
}
