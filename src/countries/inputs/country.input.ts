import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CountryInput {
  @Field()
  readonly name: string;

  @Field()
  readonly capital: string;
}
