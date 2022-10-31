import { BaseDatabase } from "../data/BaseDatabase"
import { Movies } from "../types/Movies"
export class MovieDatabase extends BaseDatabase {
    private static TABLE_MOVIE = "LABEFLIX_MOVIE"

    public async create(newMovie: Movies) {
        await BaseDatabase.connection(MovieDatabase.TABLE_MOVIE).insert({
            id: newMovie.getId(),
            title: newMovie.getTitle(),
            description: newMovie.getDescription(),
            duration_in_minutes: newMovie.getDurationMovie(),
            year_of_release: newMovie.getYearOfRelese()
        })
    }
    public async getAll() {
        const result = await BaseDatabase.connection(MovieDatabase.TABLE_MOVIE).select("*")
        return result
    }
}