import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CountryEntity } from './entities/country.entity';
import { CountryInput } from './inputs/country.input';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countriesRepository: Repository<CountryEntity>,
  ) {}

  async getCountries(): Promise<CountryEntity[]> {
    return await this.countriesRepository.find();
  }

  async getCountryById(id: string): Promise<CountryEntity> {
    return await this.countriesRepository.findOne(id);
  }

  async createCountry(data: CountryInput): Promise<CountryEntity> {
    const country = await this.countriesRepository.save({
      name: data.name,
      capital: data.capital,
    });

    return country;
  }

  async updateCountry(id: string, data: CountryInput): Promise<CountryEntity> {
    await this.countriesRepository.update(id, data);
    return await this.countriesRepository.findOne(id);
  }

  async daleteCountry(id: string): Promise<CountryEntity> {
    const country = await this.countriesRepository.findOne(id);
    await this.countriesRepository.delete(id);
    return country;
  }
}
