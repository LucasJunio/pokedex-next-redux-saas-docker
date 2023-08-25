import { EMPTY_STRING } from "@/constants/emptyStringConstant";
import { STRING_FIRST_INDEX } from "@/constants/stringFirstIndexConstant";

function capitalizeFirstLetterOfTheString(
  stringToBeCapitalized: string
): string {
  const firstStringLetterCapitalized: string = stringToBeCapitalized
    .at(STRING_FIRST_INDEX)
    ?.toUpperCase()!;
  const stringToBeCapitalizedWithoutFirstLetter: string =
    stringToBeCapitalized.replace(
      stringToBeCapitalized.at(STRING_FIRST_INDEX)!,
      EMPTY_STRING
    );

  return firstStringLetterCapitalized + stringToBeCapitalizedWithoutFirstLetter;
}

export default capitalizeFirstLetterOfTheString;
