import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CountryDto {
  @Field()
  readonly uid: string;

  @Field()
  readonly name: string;

  @Field()
  readonly capital: string;
}
