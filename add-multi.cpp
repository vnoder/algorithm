// data-struct.cpp: 定义控制台应用程序的入口点。
// uva 10523
//
#include "stdafx.h"
#include <cstdio>
#include <cstring>

const int maxlen = 500;
const int maxs = 5;

class bigNumber
{
private:
	int a[maxlen];
	int len;

public:
	bigNumber() {
		memset(a, 0, sizeof(a));
		len = 0;
	}

	int length() {
		return len;
	}

	int at(int k) {
		if (0 <= k && k < len) {
			return a[k];
		}
		return -1;
	}

	void setnum(char s[]) {
		len = 0;
		for (int i = strlen(s) - 1;i >= 0;i--) {
			a[len++] = int(s[i] - '0');
		}
	}

	bool isZero() {
		return len == 1 && a[0] == 0;
	}

	void add(bigNumber &x) {
		for (int i = 0; i < x.len; i++) {
			a[i] += x.a[i];
			a[i + 1] += a[i] / 10;
			a[i] %= 10;
		}

		int k = x.len;
		while (a[k]) {
			a[k + 1] += a[k] / 10;
			a[k++] %= 10;
		}

		len = len > k ? len : k;
	}

	void multi(bigNumber &x) {
		if (x.isZero()) {
			setnum("0");
		}

		int product[maxlen];
		memset(product, 0, sizeof(product));

		for (int i = 0;i < len; i++) {
			for (int j = 0; j < x.length(); j++) {
				product[i + j] += a[i] * x.at(j);
			}
		}

		int k = 0;
		while (k <len + x.length() -1) {
			product[k + 1] += product[k] / 10;
			product[k++] %= 10;
		}

		while (product[k]) {
			product[k + 1] += product[k] / 10;
			product[k++] %= 10;
		}

		len = k;
		memcpy(a, product, sizeof(product));
	}
};

int main()
{
	int n;
	char s[maxs];
	while (scanf("%d%s", &n, s)!=EOF)
	{
		bigNumber a, ap;
		a.setnum(s);
		ap.setnum("1");

		bigNumber sum;
		for (int i = 2; i <= n; i++) {
			bigNumber num;
			sprintf(s, "%d", i);
			num.setnum(s);
			ap.multi(a);
			num.multi(ap);
			sum.add(num);
		}

		for (int i = sum.length() - 1; i >= 0; i--) {
			printf("%d", sum.at(i));
		}
		putchar('\n');
	}
	return 0;
}

