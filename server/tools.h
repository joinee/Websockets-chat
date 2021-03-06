#ifndef TOOLS_H
#define TOOLS_H
#include <regex.h>

char *timestamp();
char *base64_encode(const char *data, size_t data_len, char *out, size_t out_len);
int compile_regex(regex_t *r, const char *regex_text);
int match_regex(regex_t *r, const char *to_match);

#endif
