import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CountryDto } from './dto/country.dto';
import { CountryEntity } from './entities/country.entity';
import { CountryInput } from './inputs/country.input';
import { CountriesService } from './countries.service';

@Resolver(() => CountryEntity)
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @Query(() => [CountryDto])
  async countries(): Promise<CountryDto[]> {
    return this.countriesService.getCountries();
  }

  @Query(() => CountryDto)
  async country(
    @Args('uid', { type: () => ID }) uid: string,
  ): Promise<CountryDto> {
    return this.countriesService.getCountryById(uid);
  }

  @Mutation(() => CountryDto)
  // @UseGuards(AuthGuard)
  async createCountry(
    @Args('input') input: CountryInput,
    // @AuthUser() user: UserEntity
  ): Promise<CountryDto> {
    // if (!user) {
    return this.countriesService.createCountry(input);
    // } else {
    // return user;
    // }
  }
}
