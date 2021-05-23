import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { UserInput } from './inputs/user.input';
import { UsersService } from './users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserDto])
  async users(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }

  @Query(() => UserDto)
  async user(@Args('uid', { type: () => ID }) uid: string): Promise<UserDto> {
    return this.usersService.getUserById(uid);
  }

  @Mutation(() => UserDto)
  // @UseGuards(AuthGuard)
  async createUser(
    @Args('input') input: UserInput,
    // @AuthUser() user: UserEntity
  ): Promise<UserDto> {
    // if (!user) {
    return this.usersService.createUser(input);
    // } else {
    // return user;
    // }
  }

  @Mutation(() => UserDto)
  async updateUser(
    @Args('uid', { type: () => ID }) uid: string,
    @Args('input') input: UserInput,
  ): Promise<UserDto> {
    return this.usersService.updateUser(uid, input);
  }

  @Mutation(() => UserDto)
  async deleteUser(
    @Args('uid', { type: () => ID }) uid: string,
  ): Promise<UserDto> {
    return this.usersService.daleteUser(uid);
  }
}
