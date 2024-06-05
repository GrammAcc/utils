__all__ = [
    "remove_control_characters",
    "hyphen_to_snake",
    "snake_to_hyphen",
]

import unicodedata


def remove_control_characters(s: str) -> str:
    """Remove any hidden control characters from the input string `s`.

    This is helpful when parsing scraped web pages.
    """

    return "".join([ch for ch in s if unicodedata.category(ch)[0] != "C"])


def hyphen_to_snake(hyphenated: str) -> str:  # pragma: no cover
    """Return `hyphenated` with all hyphen characters replaced by underscores.

    Useful for converting url params to corresponding python identifiers.
    """

    return hyphenated.replace("-", "_")


def snake_to_hyphen(snaked: str) -> str:  # pragma: no cover
    """Return `snaked` with all underscore characters replaced by hyphens.

    Useful for converting python identifiers to url params.
    """

    return snaked.replace("_", "-")
