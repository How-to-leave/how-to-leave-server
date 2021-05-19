import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from './entities/country.entity';
import { CountryInput } from './inputs/country.input';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countriesRepository: Repository<CountryEntity>,
  ) {}

  async createCountry(data: CountryInput): Promise<CountryEntity> {
    const country = await this.countriesRepository.save({
      name: data.name,
      capital: data.capital,
    });

    return country;
  }

  async getCountries(): Promise<CountryEntity[]> {
    return await this.countriesRepository.find();
  }

  async getCountryById(id: string): Promise<CountryEntity> {
    return await this.countriesRepository.findOne(id);
  }
}
