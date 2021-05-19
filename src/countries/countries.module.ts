import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryEntity } from './entities/country.entity';
import { CountriesResolver } from './countries.resolver';
import { CountriesService } from './countries.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountriesResolver, CountriesService],
  exports: [],
})
export class CountriesModule {}
