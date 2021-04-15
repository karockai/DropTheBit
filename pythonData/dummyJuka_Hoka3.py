import json
# 19:28:02 ~ 19:34:25
# 시연끝날때쯤과 가격 급락 시점을 잘 맞춰야한다

juka_list = [

{"date": "2021-04-12 19:28:02.089000", "open": 95370.0, "close": 95240.0, "low": 95240.0, "high": 95380.0, "volume": 50.52030659094453, "split": "", "dividend": "", "curPrice": 95240.0, "prePrice": 95360.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:03.126000", "open": 95260.0, "close": 95220.0, "low": 95210.0, "high": 95260.0, "volume": 0.6674552001059055, "split": "", "dividend": "", "curPrice": 95220.0, "prePrice": 95240.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:04.005000", "open": 95200.0, "close": 95220.0, "low": 95200.0, "high": 95220.0, "volume": 26.586693968623877, "split": "", "dividend": "", "curPrice": 95220.0, "prePrice": 95220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:05.237000", "open": 95200.0, "close": 95200.0, "low": 95200.0, "high": 95220.0, "volume": 45.49517505988479, "split": "", "dividend": "", "curPrice": 95200.0, "prePrice": 95220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:06.062000", "open": 95200.0, "close": 95200.0, "low": 95200.0, "high": 95220.0, "volume": 5.993471249938011, "split": "", "dividend": "", "curPrice": 95200.0, "prePrice": 95200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:07.120000", "open": 95200.0, "close": 95110.0, "low": 95110.0, "high": 95200.0, "volume": 0.11259607970714569, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:08.099000", "open": 95130.0, "close": 95110.0, "low": 95110.0, "high": 95140.0, "volume": 5.895099570974708, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:09.022000", "open": 95110.0, "close": 95110.0, "low": 95100.0, "high": 95110.0, "volume": 0.21028283052146435, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:10.186000", "open": 95110.0, "close": 95060.0, "low": 95060.0, "high": 95110.0, "volume": 26.178793409839272, "split": "", "dividend": "", "curPrice": 95060.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:11.200000", "open": 95060.0, "close": 95080.0, "low": 95000.0, "high": 95090.0, "volume": 24.929837848991156, "split": "", "dividend": "", "curPrice": 95080.0, "prePrice": 95060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:12.019000", "open": 95080.0, "close": 95050.0, "low": 95000.0, "high": 95080.0, "volume": 0.5380129795521498, "split": "", "dividend": "", "curPrice": 95050.0, "prePrice": 95080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:13.005000", "open": 95000.0, "close": 95000.0, "low": 95000.0, "high": 95050.0, "volume": 2.918439170345664, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:14.087000", "open": 94990.0, "close": 94890.0, "low": 94890.0, "high": 95000.0, "volume": 7.746577478945255, "split": "", "dividend": "", "curPrice": 94890.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:15.014000", "open": 94930.0, "close": 94930.0, "low": 94890.0, "high": 94940.0, "volume": 0.31602233089506626, "split": "", "dividend": "", "curPrice": 94930.0, "prePrice": 94890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:16.019000", "open": 94890.0, "close": 94930.0, "low": 94890.0, "high": 94930.0, "volume": 89.80336111038923, "split": "", "dividend": "", "curPrice": 94930.0, "prePrice": 94930.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:17.426000", "open": 94890.0, "close": 94860.0, "low": 94860.0, "high": 94930.0, "volume": 0.15815412066876888, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94930.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:18.052000", "open": 94850.0, "close": 94860.0, "low": 94790.0, "high": 94890.0, "volume": 0.6329116486012936, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:19.051000", "open": 94760.0, "close": 94760.0, "low": 94750.0, "high": 94860.0, "volume": 0.9100319109857082, "split": "", "dividend": "", "curPrice": 94760.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:20.032000", "open": 94830.0, "close": 94800.0, "low": 94750.0, "high": 94850.0, "volume": 1.0542962495237589, "split": "", "dividend": "", "curPrice": 94800.0, "prePrice": 94760.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:21.052000", "open": 94780.0, "close": 94860.0, "low": 94780.0, "high": 94860.0, "volume": 2.8606020007282495, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:22.005000", "open": 94860.0, "close": 94860.0, "low": 94770.0, "high": 94860.0, "volume": 42.97163034975529, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:23.037000", "open": 94790.0, "close": 94820.0, "low": 94780.0, "high": 94860.0, "volume": 16.319618459790945, "split": "", "dividend": "", "curPrice": 94820.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:24.002000", "open": 94860.0, "close": 94860.0, "low": 94790.0, "high": 94890.0, "volume": 8.11900519952178, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:25.110000", "open": 94860.0, "close": 94990.0, "low": 94850.0, "high": 94990.0, "volume": 25.24215069040656, "split": "", "dividend": "", "curPrice": 94990.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:26.123000", "open": 94990.0, "close": 95000.0, "low": 94890.0, "high": 95000.0, "volume": 1.417091641575098, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 94990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:27", "open": 95000.0, "close": 95000.0, "low": 94990.0, "high": 95050.0, "volume": 22.22131551988423, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:28.097000", "open": 95000.0, "close": 95000.0, "low": 94990.0, "high": 95080.0, "volume": 24.75510125979781, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:29.045000", "open": 95010.0, "close": 95080.0, "low": 94940.0, "high": 95080.0, "volume": 8.73644220083952, "split": "", "dividend": "", "curPrice": 95080.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:30.095000", "open": 95080.0, "close": 95050.0, "low": 95050.0, "high": 95090.0, "volume": 19.281451869755983, "split": "", "dividend": "", "curPrice": 95050.0, "prePrice": 95080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:31.215000", "open": 95090.0, "close": 95100.0, "low": 95010.0, "high": 95100.0, "volume": 6.256363989785314, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 95050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:32.117000", "open": 95080.0, "close": 94930.0, "low": 94900.0, "high": 95100.0, "volume": 38.640384471043944, "split": "", "dividend": "", "curPrice": 94930.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:33.370000", "open": 95050.0, "close": 94940.0, "low": 94900.0, "high": 95050.0, "volume": 1.7297699097543955, "split": "", "dividend": "", "curPrice": 94940.0, "prePrice": 94930.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:34.002000", "open": 94900.0, "close": 94940.0, "low": 94900.0, "high": 95050.0, "volume": 0.8599890507757664, "split": "", "dividend": "", "curPrice": 94940.0, "prePrice": 94940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:35.129000", "open": 94940.0, "close": 94890.0, "low": 94890.0, "high": 95050.0, "volume": 32.97550296969712, "split": "", "dividend": "", "curPrice": 94890.0, "prePrice": 94940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:36.121000", "open": 94900.0, "close": 94890.0, "low": 94870.0, "high": 94950.0, "volume": 22.535499868914485, "split": "", "dividend": "", "curPrice": 94890.0, "prePrice": 94890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:37.013000", "open": 94900.0, "close": 94900.0, "low": 94900.0, "high": 94940.0, "volume": 2.6612830106168985, "split": "", "dividend": "", "curPrice": 94900.0, "prePrice": 94890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:38.007000", "open": 94900.0, "close": 94940.0, "low": 94900.0, "high": 95010.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 94940.0, "prePrice": 94900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:39.160000", "open": 95040.0, "close": 95100.0, "low": 95010.0, "high": 95110.0, "volume": 6.690394280478358, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 94940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:40.127000", "open": 95100.0, "close": 95100.0, "low": 95040.0, "high": 95110.0, "volume": 5.337826889008284, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:41.224000", "open": 95100.0, "close": 95110.0, "low": 95040.0, "high": 95110.0, "volume": 7.4566328804939985, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:42.009000", "open": 95110.0, "close": 95040.0, "low": 95040.0, "high": 95200.0, "volume": 4.212619371712208, "split": "", "dividend": "", "curPrice": 95040.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:43.309000", "open": 95120.0, "close": 95110.0, "low": 95040.0, "high": 95120.0, "volume": 2.102828299626708, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:44.486000", "open": 95040.0, "close": 95110.0, "low": 95040.0, "high": 95110.0, "volume": 0.4733571596443653, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:45.563000", "open": 95080.0, "close": 95080.0, "low": 95080.0, "high": 95080.0, "volume": 0.9960139486938715, "split": "", "dividend": "", "curPrice": 95080.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:46.004000", "open": 95110.0, "close": 95110.0, "low": 95040.0, "high": 95110.0, "volume": 1.8300809692591429, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:47.449000", "open": 95090.0, "close": 95110.0, "low": 95040.0, "high": 95110.0, "volume": 56.121143931522965, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:48.090000", "open": 95110.0, "close": 95090.0, "low": 95090.0, "high": 95120.0, "volume": 0.4762079603970051, "split": "", "dividend": "", "curPrice": 95090.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:49.568000", "open": 95100.0, "close": 95100.0, "low": 95080.0, "high": 95110.0, "volume": 5.2811461593955755, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 95090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:50.002000", "open": 95100.0, "close": 95100.0, "low": 95100.0, "high": 95100.0, "volume": 0.7350683398544788, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:51.097000", "open": 95100.0, "close": 95100.0, "low": 95080.0, "high": 95100.0, "volume": 5.924532068893313, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:52.120000", "open": 95040.0, "close": 95010.0, "low": 95010.0, "high": 95100.0, "volume": 0.136042520403862, "split": "", "dividend": "", "curPrice": 95010.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:53.040000", "open": 95010.0, "close": 95000.0, "low": 94970.0, "high": 95090.0, "volume": 21.338762789964676, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95010.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:54.149000", "open": 94970.0, "close": 94970.0, "low": 94960.0, "high": 95000.0, "volume": 1.0477786995470524, "split": "", "dividend": "", "curPrice": 94970.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:55.114000", "open": 94970.0, "close": 95000.0, "low": 94970.0, "high": 95000.0, "volume": 1.0526315700262785, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 94970.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:56.022000", "open": 94960.0, "close": 94960.0, "low": 94960.0, "high": 94970.0, "volume": 7.648568710312247, "split": "", "dividend": "", "curPrice": 94960.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:57.295000", "open": 94960.0, "close": 94950.0, "low": 94950.0, "high": 94970.0, "volume": 10.0, "split": "", "dividend": "", "curPrice": 94950.0, "prePrice": 94960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:58.016000", "open": 94940.0, "close": 94940.0, "low": 94940.0, "high": 94960.0, "volume": 9.341233680024743, "split": "", "dividend": "", "curPrice": 94940.0, "prePrice": 94950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:28:59.190000", "open": 94940.0, "close": 94960.0, "low": 94910.0, "high": 94970.0, "volume": 31.300977889448404, "split": "", "dividend": "", "curPrice": 94960.0, "prePrice": 94940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:00.047000", "open": 94960.0, "close": 94910.0, "low": 94900.0, "high": 94970.0, "volume": 2.862852031365037, "split": "", "dividend": "", "curPrice": 94910.0, "prePrice": 94960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:01.024000", "open": 94900.0, "close": 94910.0, "low": 94900.0, "high": 94910.0, "volume": 0.3498882409185171, "split": "", "dividend": "", "curPrice": 94910.0, "prePrice": 94910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:02.079000", "open": 94910.0, "close": 94910.0, "low": 94900.0, "high": 94910.0, "volume": 3.5601411797106266, "split": "", "dividend": "", "curPrice": 94910.0, "prePrice": 94910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:03.026000", "open": 94900.0, "close": 94910.0, "low": 94900.0, "high": 94910.0, "volume": 0.8264383506029844, "split": "", "dividend": "", "curPrice": 94910.0, "prePrice": 94910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:04.113000", "open": 94910.0, "close": 94900.0, "low": 94900.0, "high": 94930.0, "volume": 10.0, "split": "", "dividend": "", "curPrice": 94900.0, "prePrice": 94910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:05.100000", "open": 94900.0, "close": 94900.0, "low": 94900.0, "high": 95000.0, "volume": 2.36818366125226, "split": "", "dividend": "", "curPrice": 94900.0, "prePrice": 94900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:06.186000", "open": 94900.0, "close": 94890.0, "low": 94890.0, "high": 94930.0, "volume": 3.375834120437503, "split": "", "dividend": "", "curPrice": 94890.0, "prePrice": 94900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:07.150000", "open": 94890.0, "close": 94900.0, "low": 94890.0, "high": 94900.0, "volume": 3.063340349122882, "split": "", "dividend": "", "curPrice": 94900.0, "prePrice": 94890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:08.025000", "open": 94900.0, "close": 94890.0, "low": 94870.0, "high": 94900.0, "volume": 0.6183574702590704, "split": "", "dividend": "", "curPrice": 94890.0, "prePrice": 94900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:09.058000", "open": 94900.0, "close": 94870.0, "low": 94870.0, "high": 94900.0, "volume": 0.4127433206886053, "split": "", "dividend": "", "curPrice": 94870.0, "prePrice": 94890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:10.152000", "open": 94890.0, "close": 94870.0, "low": 94870.0, "high": 94890.0, "volume": 2.346656270325184, "split": "", "dividend": "", "curPrice": 94870.0, "prePrice": 94870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:11.056000", "open": 94880.0, "close": 94870.0, "low": 94870.0, "high": 94880.0, "volume": 3.321377608925104, "split": "", "dividend": "", "curPrice": 94870.0, "prePrice": 94870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:12.005000", "open": 94870.0, "close": 94860.0, "low": 94860.0, "high": 94890.0, "volume": 1.0133647304028273, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:13.249000", "open": 94870.0, "close": 94880.0, "low": 94860.0, "high": 94890.0, "volume": 1.0539629012346268, "split": "", "dividend": "", "curPrice": 94880.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:14.057000", "open": 94870.0, "close": 94850.0, "low": 94850.0, "high": 94870.0, "volume": 6.469537450000644, "split": "", "dividend": "", "curPrice": 94850.0, "prePrice": 94880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:15.037000", "open": 94860.0, "close": 94880.0, "low": 94850.0, "high": 94880.0, "volume": 1.4078402798622847, "split": "", "dividend": "", "curPrice": 94880.0, "prePrice": 94850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:16.280000", "open": 94880.0, "close": 94870.0, "low": 94810.0, "high": 94880.0, "volume": 3.1335562709718943, "split": "", "dividend": "", "curPrice": 94870.0, "prePrice": 94880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:17.250000", "open": 94870.0, "close": 94840.0, "low": 94840.0, "high": 94880.0, "volume": 0.27350278943777084, "split": "", "dividend": "", "curPrice": 94840.0, "prePrice": 94870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:18.067000", "open": 94860.0, "close": 94860.0, "low": 94840.0, "high": 94860.0, "volume": 3.8002602607011795, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:19.082000", "open": 94860.0, "close": 94860.0, "low": 94840.0, "high": 94860.0, "volume": 5.521444359794259, "split": "", "dividend": "", "curPrice": 94860.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:20.368000", "open": 94860.0, "close": 94930.0, "low": 94860.0, "high": 94930.0, "volume": 1.6183327697217464, "split": "", "dividend": "", "curPrice": 94930.0, "prePrice": 94860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:21.181000", "open": 94930.0, "close": 94910.0, "low": 94910.0, "high": 95000.0, "volume": 0.312630258500576, "split": "", "dividend": "", "curPrice": 94910.0, "prePrice": 94930.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:22.168000", "open": 94910.0, "close": 95000.0, "low": 94910.0, "high": 95000.0, "volume": 12.910252628847957, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 94910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:23.200000", "open": 95000.0, "close": 94940.0, "low": 94940.0, "high": 95000.0, "volume": 0.2595335692167282, "split": "", "dividend": "", "curPrice": 94940.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:24.054000", "open": 95030.0, "close": 95090.0, "low": 95000.0, "high": 95090.0, "volume": 0.27549191005527973, "split": "", "dividend": "", "curPrice": 95090.0, "prePrice": 94940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:25.301000", "open": 95090.0, "close": 95090.0, "low": 95000.0, "high": 95090.0, "volume": 9.885192969813943, "split": "", "dividend": "", "curPrice": 95090.0, "prePrice": 95090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:26.694000", "open": 95050.0, "close": 95090.0, "low": 95040.0, "high": 95110.0, "volume": 14.698297528550029, "split": "", "dividend": "", "curPrice": 95090.0, "prePrice": 95090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:27.238000", "open": 95040.0, "close": 95000.0, "low": 95000.0, "high": 95070.0, "volume": 1.7204191498458385, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:28.104000", "open": 95030.0, "close": 95090.0, "low": 95000.0, "high": 95090.0, "volume": 19.384523740038276, "split": "", "dividend": "", "curPrice": 95090.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:29.080000", "open": 95030.0, "close": 95000.0, "low": 95000.0, "high": 95090.0, "volume": 5.0, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:30.351000", "open": 95110.0, "close": 95040.0, "low": 95030.0, "high": 95190.0, "volume": 0.1053851805627346, "split": "", "dividend": "", "curPrice": 95040.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:31.102000", "open": 95040.0, "close": 95040.0, "low": 95000.0, "high": 95040.0, "volume": 2.6328932400792837, "split": "", "dividend": "", "curPrice": 95040.0, "prePrice": 95040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:32.102000", "open": 95040.0, "close": 95040.0, "low": 95040.0, "high": 95040.0, "volume": 3.9963183291256428, "split": "", "dividend": "", "curPrice": 95040.0, "prePrice": 95040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:33.011000", "open": 95040.0, "close": 95100.0, "low": 95040.0, "high": 95100.0, "volume": 2.6051314398646355, "split": "", "dividend": "", "curPrice": 95100.0, "prePrice": 95040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:34.035000", "open": 95040.0, "close": 95200.0, "low": 95040.0, "high": 95200.0, "volume": 0.44907562993466854, "split": "", "dividend": "", "curPrice": 95200.0, "prePrice": 95100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:35.245000", "open": 95040.0, "close": 95180.0, "low": 95040.0, "high": 95200.0, "volume": 3.0040991492569447, "split": "", "dividend": "", "curPrice": 95180.0, "prePrice": 95200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:36.103000", "open": 95200.0, "close": 95200.0, "low": 95110.0, "high": 95200.0, "volume": 2.450864899903536, "split": "", "dividend": "", "curPrice": 95200.0, "prePrice": 95180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:37.160000", "open": 95100.0, "close": 95200.0, "low": 95100.0, "high": 95200.0, "volume": 26.247226890176535, "split": "", "dividend": "", "curPrice": 95200.0, "prePrice": 95200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:38.244000", "open": 95200.0, "close": 95110.0, "low": 95100.0, "high": 95200.0, "volume": 10.514141520485282, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:39.038000", "open": 95110.0, "close": 95110.0, "low": 95110.0, "high": 95190.0, "volume": 3.453722979873419, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:40.517000", "open": 95150.0, "close": 95260.0, "low": 95110.0, "high": 95260.0, "volume": 0.45354944095015526, "split": "", "dividend": "", "curPrice": 95260.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:41.060000", "open": 95270.0, "close": 95270.0, "low": 95270.0, "high": 95270.0, "volume": 0.42404744029045105, "split": "", "dividend": "", "curPrice": 95270.0, "prePrice": 95260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:42.001000", "open": 95200.0, "close": 95300.0, "low": 95190.0, "high": 95300.0, "volume": 12.333016270771623, "split": "", "dividend": "", "curPrice": 95300.0, "prePrice": 95270.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:43.154000", "open": 95300.0, "close": 95310.0, "low": 95250.0, "high": 95360.0, "volume": 0.3351173009723425, "split": "", "dividend": "", "curPrice": 95310.0, "prePrice": 95300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:44.010000", "open": 95300.0, "close": 95300.0, "low": 95300.0, "high": 95350.0, "volume": 23.57511407881975, "split": "", "dividend": "", "curPrice": 95300.0, "prePrice": 95310.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:45.070000", "open": 95300.0, "close": 95360.0, "low": 95300.0, "high": 95380.0, "volume": 0.2927155904471874, "split": "", "dividend": "", "curPrice": 95360.0, "prePrice": 95300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:46.056000", "open": 95370.0, "close": 95360.0, "low": 95360.0, "high": 95380.0, "volume": 1.035556958988309, "split": "", "dividend": "", "curPrice": 95360.0, "prePrice": 95360.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:47.176000", "open": 95370.0, "close": 95380.0, "low": 95350.0, "high": 95380.0, "volume": 14.446833711117506, "split": "", "dividend": "", "curPrice": 95380.0, "prePrice": 95360.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:48.134000", "open": 95370.0, "close": 95380.0, "low": 95370.0, "high": 95380.0, "volume": 8.057267419993877, "split": "", "dividend": "", "curPrice": 95380.0, "prePrice": 95380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:49.162000", "open": 95370.0, "close": 95370.0, "low": 95370.0, "high": 95390.0, "volume": 0.18594702892005444, "split": "", "dividend": "", "curPrice": 95370.0, "prePrice": 95380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:50.230000", "open": 95380.0, "close": 95380.0, "low": 95370.0, "high": 95380.0, "volume": 1.0985986199229956, "split": "", "dividend": "", "curPrice": 95380.0, "prePrice": 95370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:51.495000", "open": 95380.0, "close": 95380.0, "low": 95360.0, "high": 95390.0, "volume": 3.185303818434477, "split": "", "dividend": "", "curPrice": 95380.0, "prePrice": 95380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:52.074000", "open": 95380.0, "close": 95370.0, "low": 95370.0, "high": 95380.0, "volume": 9.074104029685259, "split": "", "dividend": "", "curPrice": 95370.0, "prePrice": 95380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:53.130000", "open": 95370.0, "close": 95370.0, "low": 95360.0, "high": 95380.0, "volume": 31.45643283985555, "split": "", "dividend": "", "curPrice": 95370.0, "prePrice": 95370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:54.020000", "open": 95370.0, "close": 95360.0, "low": 95360.0, "high": 95380.0, "volume": 3.3300568591803312, "split": "", "dividend": "", "curPrice": 95360.0, "prePrice": 95370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:55.115000", "open": 95360.0, "close": 95250.0, "low": 95250.0, "high": 95360.0, "volume": 7.604923199862242, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95360.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:56.115000", "open": 95240.0, "close": 95110.0, "low": 95110.0, "high": 95300.0, "volume": 2.209178939461708, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:57.008000", "open": 95190.0, "close": 95190.0, "low": 95110.0, "high": 95240.0, "volume": 3.0707239899784327, "split": "", "dividend": "", "curPrice": 95190.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:29:58.087000", "open": 95110.0, "close": 95250.0, "low": 95110.0, "high": 95300.0, "volume": 0.12940511107444763, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95190.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:00.064000", "open": 95110.0, "close": 95110.0, "low": 95110.0, "high": 95250.0, "volume": 28.69217679090798, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:01.278000", "open": 95110.0, "close": 95110.0, "low": 95110.0, "high": 95140.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 95110.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:02.120000", "open": 95140.0, "close": 95250.0, "low": 95110.0, "high": 95250.0, "volume": 0.5955163594335318, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:03.005000", "open": 95110.0, "close": 95240.0, "low": 95110.0, "high": 95250.0, "volume": 0.5249895006418228, "split": "", "dividend": "", "curPrice": 95240.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:04.041000", "open": 95120.0, "close": 95250.0, "low": 95110.0, "high": 95250.0, "volume": 7.997127290815115, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95240.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:05.682000", "open": 95240.0, "close": 95250.0, "low": 95150.0, "high": 95250.0, "volume": 1.0498687606304884, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:06.260000", "open": 95250.0, "close": 95250.0, "low": 95250.0, "high": 95250.0, "volume": 44.11124745942652, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:07.269000", "open": 95270.0, "close": 95300.0, "low": 95240.0, "high": 95300.0, "volume": 0.21196228079497814, "split": "", "dividend": "", "curPrice": 95300.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:08.266000", "open": 95300.0, "close": 95250.0, "low": 95240.0, "high": 95300.0, "volume": 1.0514141600579023, "split": "", "dividend": "", "curPrice": 95250.0, "prePrice": 95300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:09.110000", "open": 95270.0, "close": 95350.0, "low": 95250.0, "high": 95350.0, "volume": 2.724124640226364, "split": "", "dividend": "", "curPrice": 95350.0, "prePrice": 95250.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:10.052000", "open": 95370.0, "close": 95310.0, "low": 95310.0, "high": 95370.0, "volume": 0.1310420986264944, "split": "", "dividend": "", "curPrice": 95310.0, "prePrice": 95350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:11.237000", "open": 95310.0, "close": 95370.0, "low": 95310.0, "high": 95370.0, "volume": 0.19856400974094868, "split": "", "dividend": "", "curPrice": 95370.0, "prePrice": 95310.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:12.030000", "open": 95380.0, "close": 95370.0, "low": 95360.0, "high": 95400.0, "volume": 8.798835130408406, "split": "", "dividend": "", "curPrice": 95370.0, "prePrice": 95370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:13.232000", "open": 95400.0, "close": 95370.0, "low": 95370.0, "high": 95400.0, "volume": 5.9960349611938, "split": "", "dividend": "", "curPrice": 95370.0, "prePrice": 95370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:14.807000", "open": 95370.0, "close": 95380.0, "low": 95370.0, "high": 95380.0, "volume": 1.901994489133358, "split": "", "dividend": "", "curPrice": 95380.0, "prePrice": 95370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:15.744000", "open": 95420.0, "close": 95420.0, "low": 95420.0, "high": 95420.0, "volume": 76.1493767015636, "split": "", "dividend": "", "curPrice": 95420.0, "prePrice": 95380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:16.100000", "open": 95400.0, "close": 95410.0, "low": 95380.0, "high": 95410.0, "volume": 16.744590589776635, "split": "", "dividend": "", "curPrice": 95410.0, "prePrice": 95420.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:17.056000", "open": 95410.0, "close": 95440.0, "low": 95400.0, "high": 95440.0, "volume": 0.865206690505147, "split": "", "dividend": "", "curPrice": 95440.0, "prePrice": 95410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:18.007000", "open": 95420.0, "close": 95410.0, "low": 95370.0, "high": 95440.0, "volume": 10.949571849778295, "split": "", "dividend": "", "curPrice": 95410.0, "prePrice": 95440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:19.055000", "open": 95440.0, "close": 95400.0, "low": 95400.0, "high": 95440.0, "volume": 5.618227951228619, "split": "", "dividend": "", "curPrice": 95400.0, "prePrice": 95410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:20.220000", "open": 95380.0, "close": 95450.0, "low": 95380.0, "high": 95460.0, "volume": 0.19096224941313267, "split": "", "dividend": "", "curPrice": 95450.0, "prePrice": 95400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:21.003000", "open": 95450.0, "close": 95450.0, "low": 95440.0, "high": 95450.0, "volume": 1.8269162215292454, "split": "", "dividend": "", "curPrice": 95450.0, "prePrice": 95450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:22.119000", "open": 95450.0, "close": 95490.0, "low": 95420.0, "high": 95490.0, "volume": 6.342843070626259, "split": "", "dividend": "", "curPrice": 95490.0, "prePrice": 95450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:23.059000", "open": 95490.0, "close": 95500.0, "low": 95460.0, "high": 95500.0, "volume": 7.335130888968706, "split": "", "dividend": "", "curPrice": 95500.0, "prePrice": 95490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:24.053000", "open": 95500.0, "close": 95560.0, "low": 95500.0, "high": 95560.0, "volume": 1.5089135002344847, "split": "", "dividend": "", "curPrice": 95560.0, "prePrice": 95500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:25.324000", "open": 95570.0, "close": 95500.0, "low": 95500.0, "high": 95570.0, "volume": 0.29316348023712635, "split": "", "dividend": "", "curPrice": 95500.0, "prePrice": 95560.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:26.118000", "open": 95500.0, "close": 95570.0, "low": 95500.0, "high": 95570.0, "volume": 1.0463534500449896, "split": "", "dividend": "", "curPrice": 95570.0, "prePrice": 95500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:27.099000", "open": 95570.0, "close": 95570.0, "low": 95500.0, "high": 95570.0, "volume": 0.5236150398850441, "split": "", "dividend": "", "curPrice": 95570.0, "prePrice": 95570.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:28.024000", "open": 95570.0, "close": 95620.0, "low": 95550.0, "high": 95620.0, "volume": 0.10458063893020153, "split": "", "dividend": "", "curPrice": 95620.0, "prePrice": 95570.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:29.203000", "open": 95580.0, "close": 95700.0, "low": 95530.0, "high": 95780.0, "volume": 21.546343211084604, "split": "", "dividend": "", "curPrice": 95700.0, "prePrice": 95620.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:30.052000", "open": 95870.0, "close": 95900.0, "low": 95780.0, "high": 95900.0, "volume": 7.693138679489493, "split": "", "dividend": "", "curPrice": 95900.0, "prePrice": 95700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:31.115000", "open": 95860.0, "close": 95780.0, "low": 95630.0, "high": 95900.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 95780.0, "prePrice": 95900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:32.062000", "open": 95780.0, "close": 95880.0, "low": 95780.0, "high": 95900.0, "volume": 39.10094389133155, "split": "", "dividend": "", "curPrice": 95880.0, "prePrice": 95780.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:33.388000", "open": 95780.0, "close": 95780.0, "low": 95780.0, "high": 95900.0, "volume": 8.112055679783225, "split": "", "dividend": "", "curPrice": 95780.0, "prePrice": 95880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:34.186000", "open": 95640.0, "close": 95920.0, "low": 95640.0, "high": 95980.0, "volume": 0.24301495030522346, "split": "", "dividend": "", "curPrice": 95920.0, "prePrice": 95780.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:35.104000", "open": 95980.0, "close": 95980.0, "low": 95780.0, "high": 96000.0, "volume": 1.0418837200850248, "split": "", "dividend": "", "curPrice": 95980.0, "prePrice": 95920.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:36.173000", "open": 95980.0, "close": 95980.0, "low": 95980.0, "high": 96000.0, "volume": 0.9444048292934895, "split": "", "dividend": "", "curPrice": 95980.0, "prePrice": 95980.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:37.436000", "open": 95980.0, "close": 96000.0, "low": 95980.0, "high": 96000.0, "volume": 8.0, "split": "", "dividend": "", "curPrice": 96000.0, "prePrice": 95980.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:38.010000", "open": 96000.0, "close": 96000.0, "low": 96000.0, "high": 96040.0, "volume": 15.417210090905428, "split": "", "dividend": "", "curPrice": 96000.0, "prePrice": 96000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:39.026000", "open": 96010.0, "close": 96040.0, "low": 96000.0, "high": 96070.0, "volume": 2.739181589335203, "split": "", "dividend": "", "curPrice": 96040.0, "prePrice": 96000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:40.029000", "open": 96010.0, "close": 96120.0, "low": 96000.0, "high": 96120.0, "volume": 0.6157614607363939, "split": "", "dividend": "", "curPrice": 96120.0, "prePrice": 96040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:41.061000", "open": 96100.0, "close": 96110.0, "low": 96070.0, "high": 96140.0, "volume": 10.686044020578265, "split": "", "dividend": "", "curPrice": 96110.0, "prePrice": 96120.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:42.068000", "open": 96130.0, "close": 96180.0, "low": 96120.0, "high": 96180.0, "volume": 40.733821999281645, "split": "", "dividend": "", "curPrice": 96180.0, "prePrice": 96110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:43.202000", "open": 96140.0, "close": 96170.0, "low": 96140.0, "high": 96180.0, "volume": 2.0833333395421505, "split": "", "dividend": "", "curPrice": 96170.0, "prePrice": 96180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:44.029000", "open": 96170.0, "close": 96230.0, "low": 96170.0, "high": 96230.0, "volume": 0.0005580112338066101, "split": "", "dividend": "", "curPrice": 96230.0, "prePrice": 96170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:45.135000", "open": 96200.0, "close": 96140.0, "low": 96140.0, "high": 96300.0, "volume": 20.064409809187055, "split": "", "dividend": "", "curPrice": 96140.0, "prePrice": 96230.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:46.117000", "open": 96170.0, "close": 96300.0, "low": 96160.0, "high": 96300.0, "volume": 3.2636240888386965, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:47.128000", "open": 96300.0, "close": 96270.0, "low": 96230.0, "high": 96300.0, "volume": 10.376673229038715, "split": "", "dividend": "", "curPrice": 96270.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:48.071000", "open": 96250.0, "close": 96300.0, "low": 96250.0, "high": 96300.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96270.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:49.035000", "open": 96290.0, "close": 96180.0, "low": 96180.0, "high": 96300.0, "volume": 7.533347319811583, "split": "", "dividend": "", "curPrice": 96180.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:50.088000", "open": 96330.0, "close": 96170.0, "low": 96170.0, "high": 96330.0, "volume": 25.455879729241133, "split": "", "dividend": "", "curPrice": 96170.0, "prePrice": 96180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:51.010000", "open": 96140.0, "close": 96270.0, "low": 96140.0, "high": 96300.0, "volume": 11.912423128262162, "split": "", "dividend": "", "curPrice": 96270.0, "prePrice": 96170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:52.152000", "open": 96280.0, "close": 96230.0, "low": 96180.0, "high": 96330.0, "volume": 10.784492520615458, "split": "", "dividend": "", "curPrice": 96230.0, "prePrice": 96270.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:53.001000", "open": 96230.0, "close": 96300.0, "low": 96140.0, "high": 96300.0, "volume": 12.553800199180841, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96230.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:54.112000", "open": 96270.0, "close": 96270.0, "low": 96250.0, "high": 96330.0, "volume": 7.277189809828997, "split": "", "dividend": "", "curPrice": 96270.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:55.045000", "open": 96270.0, "close": 96300.0, "low": 96250.0, "high": 96300.0, "volume": 0.5617258511483669, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96270.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:56.018000", "open": 96280.0, "close": 96300.0, "low": 96280.0, "high": 96300.0, "volume": 2.9557549599558115, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:57.215000", "open": 96330.0, "close": 96290.0, "low": 96250.0, "high": 96330.0, "volume": 6.053444499149919, "split": "", "dividend": "", "curPrice": 96290.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:58.191000", "open": 96330.0, "close": 96330.0, "low": 96280.0, "high": 96330.0, "volume": 2.250322898849845, "split": "", "dividend": "", "curPrice": 96330.0, "prePrice": 96290.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:30:59.181000", "open": 96330.0, "close": 96280.0, "low": 96280.0, "high": 96330.0, "volume": 9.999387200921774, "split": "", "dividend": "", "curPrice": 96280.0, "prePrice": 96330.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:00.040000", "open": 96280.0, "close": 96280.0, "low": 96270.0, "high": 96280.0, "volume": 20.840275740250945, "split": "", "dividend": "", "curPrice": 96280.0, "prePrice": 96280.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:01.110000", "open": 96280.0, "close": 96280.0, "low": 96250.0, "high": 96300.0, "volume": 100.54734228923917, "split": "", "dividend": "", "curPrice": 96280.0, "prePrice": 96280.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:02.097000", "open": 96280.0, "close": 96290.0, "low": 96280.0, "high": 96320.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 96290.0, "prePrice": 96280.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:03.056000", "open": 96290.0, "close": 96280.0, "low": 96280.0, "high": 96320.0, "volume": 23.635813429951668, "split": "", "dividend": "", "curPrice": 96280.0, "prePrice": 96290.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:04.072000", "open": 96290.0, "close": 96300.0, "low": 96280.0, "high": 96300.0, "volume": 8.934164071455598, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96280.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:05.195000", "open": 96300.0, "close": 96300.0, "low": 96300.0, "high": 96330.0, "volume": 5.6450279504060745, "split": "", "dividend": "", "curPrice": 96300.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:06.035000", "open": 96300.0, "close": 96370.0, "low": 96300.0, "high": 96380.0, "volume": 34.07634682953358, "split": "", "dividend": "", "curPrice": 96370.0, "prePrice": 96300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:07.148000", "open": 96400.0, "close": 96400.0, "low": 96330.0, "high": 96400.0, "volume": 2.8858506195247173, "split": "", "dividend": "", "curPrice": 96400.0, "prePrice": 96370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:08.396000", "open": 96330.0, "close": 96400.0, "low": 96330.0, "high": 96450.0, "volume": 3.5203352607786655, "split": "", "dividend": "", "curPrice": 96400.0, "prePrice": 96400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:09.008000", "open": 96390.0, "close": 96490.0, "low": 96390.0, "high": 96490.0, "volume": 10.610197940841317, "split": "", "dividend": "", "curPrice": 96490.0, "prePrice": 96400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:10.589000", "open": 96450.0, "close": 96430.0, "low": 96390.0, "high": 96450.0, "volume": 2.1104729399085045, "split": "", "dividend": "", "curPrice": 96430.0, "prePrice": 96490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:11.075000", "open": 96450.0, "close": 96450.0, "low": 96430.0, "high": 96450.0, "volume": 9.571864489465952, "split": "", "dividend": "", "curPrice": 96450.0, "prePrice": 96430.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:12.012000", "open": 96450.0, "close": 96420.0, "low": 96390.0, "high": 96450.0, "volume": 4.450278220698237, "split": "", "dividend": "", "curPrice": 96420.0, "prePrice": 96450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:13.020000", "open": 96390.0, "close": 96400.0, "low": 96380.0, "high": 96450.0, "volume": 0.6303453110158443, "split": "", "dividend": "", "curPrice": 96400.0, "prePrice": 96420.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:14.003000", "open": 96390.0, "close": 96450.0, "low": 96390.0, "high": 96490.0, "volume": 0.9786227885633707, "split": "", "dividend": "", "curPrice": 96450.0, "prePrice": 96400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:15.043000", "open": 96450.0, "close": 96450.0, "low": 96420.0, "high": 96490.0, "volume": 3.366672409698367, "split": "", "dividend": "", "curPrice": 96450.0, "prePrice": 96450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:16.123000", "open": 96450.0, "close": 96490.0, "low": 96450.0, "high": 96490.0, "volume": 0.30276238918304443, "split": "", "dividend": "", "curPrice": 96490.0, "prePrice": 96450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:17.184000", "open": 96490.0, "close": 96490.0, "low": 96390.0, "high": 96490.0, "volume": 3.661108609288931, "split": "", "dividend": "", "curPrice": 96490.0, "prePrice": 96490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:18.103000", "open": 96460.0, "close": 96490.0, "low": 96450.0, "high": 96490.0, "volume": 2.072538860142231, "split": "", "dividend": "", "curPrice": 96490.0, "prePrice": 96490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:19.056000", "open": 96460.0, "close": 96400.0, "low": 96400.0, "high": 96490.0, "volume": 6.865683959797025, "split": "", "dividend": "", "curPrice": 96400.0, "prePrice": 96490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:20.150000", "open": 96490.0, "close": 96540.0, "low": 96390.0, "high": 96540.0, "volume": 13.169937370344996, "split": "", "dividend": "", "curPrice": 96540.0, "prePrice": 96400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:21.097000", "open": 96540.0, "close": 96450.0, "low": 96400.0, "high": 96540.0, "volume": 4.933616520836949, "split": "", "dividend": "", "curPrice": 96450.0, "prePrice": 96540.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:22.023000", "open": 96440.0, "close": 96500.0, "low": 96390.0, "high": 96540.0, "volume": 9.325637189671397, "split": "", "dividend": "", "curPrice": 96500.0, "prePrice": 96450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:23.131000", "open": 96530.0, "close": 96500.0, "low": 96480.0, "high": 96580.0, "volume": 1.272969739511609, "split": "", "dividend": "", "curPrice": 96500.0, "prePrice": 96500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:24", "open": 96490.0, "close": 96580.0, "low": 96490.0, "high": 96580.0, "volume": 321.82418187893927, "split": "", "dividend": "", "curPrice": 96580.0, "prePrice": 96500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:25.135000", "open": 96580.0, "close": 96590.0, "low": 96540.0, "high": 96590.0, "volume": 0.22073310054838657, "split": "", "dividend": "", "curPrice": 96590.0, "prePrice": 96580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:26.132000", "open": 96580.0, "close": 96870.0, "low": 96540.0, "high": 96870.0, "volume": 29.03660576045513, "split": "", "dividend": "", "curPrice": 96870.0, "prePrice": 96590.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:27.274000", "open": 96590.0, "close": 96600.0, "low": 96590.0, "high": 96670.0, "volume": 1.4862425699830055, "split": "", "dividend": "", "curPrice": 96600.0, "prePrice": 96870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:28.129000", "open": 96600.0, "close": 96660.0, "low": 96590.0, "high": 96870.0, "volume": 8.0, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:29.620000", "open": 96670.0, "close": 96800.0, "low": 96660.0, "high": 96800.0, "volume": 102.56793369911611, "split": "", "dividend": "", "curPrice": 96800.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:30.094000", "open": 96800.0, "close": 96800.0, "low": 96670.0, "high": 96800.0, "volume": 0.9384607393294573, "split": "", "dividend": "", "curPrice": 96800.0, "prePrice": 96800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:31.140000", "open": 96800.0, "close": 96700.0, "low": 96670.0, "high": 96800.0, "volume": 5.127778710797429, "split": "", "dividend": "", "curPrice": 96700.0, "prePrice": 96800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:32.028000", "open": 96800.0, "close": 96910.0, "low": 96670.0, "high": 96910.0, "volume": 1.3707150910049677, "split": "", "dividend": "", "curPrice": 96910.0, "prePrice": 96700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:33.083000", "open": 96910.0, "close": 96800.0, "low": 96800.0, "high": 96930.0, "volume": 20.73613270930946, "split": "", "dividend": "", "curPrice": 96800.0, "prePrice": 96910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:34.591000", "open": 96800.0, "close": 96900.0, "low": 96800.0, "high": 97000.0, "volume": 0.2817368395626545, "split": "", "dividend": "", "curPrice": 96900.0, "prePrice": 96800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:35.010000", "open": 96900.0, "close": 96890.0, "low": 96890.0, "high": 96910.0, "volume": 9.347099149599671, "split": "", "dividend": "", "curPrice": 96890.0, "prePrice": 96900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:36.101000", "open": 96910.0, "close": 96890.0, "low": 96870.0, "high": 97000.0, "volume": 167.1486319694668, "split": "", "dividend": "", "curPrice": 96890.0, "prePrice": 96890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:37.204000", "open": 96890.0, "close": 97000.0, "low": 96800.0, "high": 97000.0, "volume": 34.60549994930625, "split": "", "dividend": "", "curPrice": 97000.0, "prePrice": 96890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:38.190000", "open": 97000.0, "close": 97000.0, "low": 96910.0, "high": 97000.0, "volume": 2.9490512404590845, "split": "", "dividend": "", "curPrice": 97000.0, "prePrice": 97000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:39.015000", "open": 97000.0, "close": 96930.0, "low": 96670.0, "high": 97000.0, "volume": 7.0947194285690784, "split": "", "dividend": "", "curPrice": 96930.0, "prePrice": 97000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:40.057000", "open": 96930.0, "close": 96980.0, "low": 96930.0, "high": 97000.0, "volume": 10.184071758762002, "split": "", "dividend": "", "curPrice": 96980.0, "prePrice": 96930.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:41.116000", "open": 97000.0, "close": 96960.0, "low": 96930.0, "high": 97000.0, "volume": 10.0, "split": "", "dividend": "", "curPrice": 96960.0, "prePrice": 96980.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:42.012000", "open": 96930.0, "close": 96940.0, "low": 96910.0, "high": 97000.0, "volume": 1.7982876002788544, "split": "", "dividend": "", "curPrice": 96940.0, "prePrice": 96960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:43.061000", "open": 96940.0, "close": 96980.0, "low": 96920.0, "high": 97000.0, "volume": 0.16564138047397137, "split": "", "dividend": "", "curPrice": 96980.0, "prePrice": 96940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:44.131000", "open": 96970.0, "close": 96990.0, "low": 96970.0, "high": 97000.0, "volume": 10.57475003041327, "split": "", "dividend": "", "curPrice": 96990.0, "prePrice": 96980.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:45.037000", "open": 97000.0, "close": 97020.0, "low": 96970.0, "high": 97020.0, "volume": 0.8882155511528254, "split": "", "dividend": "", "curPrice": 97020.0, "prePrice": 96990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:46.025000", "open": 97020.0, "close": 97000.0, "low": 97000.0, "high": 97070.0, "volume": 2.1352759283035994, "split": "", "dividend": "", "curPrice": 97000.0, "prePrice": 97020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:47.164000", "open": 97070.0, "close": 97020.0, "low": 97010.0, "high": 97070.0, "volume": 9.279016459360719, "split": "", "dividend": "", "curPrice": 97020.0, "prePrice": 97000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:48.016000", "open": 97020.0, "close": 97020.0, "low": 97020.0, "high": 97190.0, "volume": 0.3786973413079977, "split": "", "dividend": "", "curPrice": 97020.0, "prePrice": 97020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:49.019000", "open": 97070.0, "close": 97080.0, "low": 97010.0, "high": 97100.0, "volume": 1.3023397903889418, "split": "", "dividend": "", "curPrice": 97080.0, "prePrice": 97020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:50.004000", "open": 97090.0, "close": 97090.0, "low": 97080.0, "high": 97100.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 97090.0, "prePrice": 97080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:51.163000", "open": 97090.0, "close": 97150.0, "low": 97090.0, "high": 97300.0, "volume": 2.0605810787528753, "split": "", "dividend": "", "curPrice": 97150.0, "prePrice": 97090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:52.161000", "open": 97200.0, "close": 97190.0, "low": 97100.0, "high": 97390.0, "volume": 0.19691974110901356, "split": "", "dividend": "", "curPrice": 97190.0, "prePrice": 97150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:53.001000", "open": 97190.0, "close": 97390.0, "low": 97120.0, "high": 97390.0, "volume": 5.374463489279151, "split": "", "dividend": "", "curPrice": 97390.0, "prePrice": 97190.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:54.151000", "open": 97150.0, "close": 97220.0, "low": 97150.0, "high": 97390.0, "volume": 2.8966481499373913, "split": "", "dividend": "", "curPrice": 97220.0, "prePrice": 97390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:55.046000", "open": 97330.0, "close": 97400.0, "low": 97170.0, "high": 97440.0, "volume": 0.2581160105764866, "split": "", "dividend": "", "curPrice": 97400.0, "prePrice": 97220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:56.121000", "open": 97440.0, "close": 97390.0, "low": 97390.0, "high": 97440.0, "volume": 2.6800942309200764, "split": "", "dividend": "", "curPrice": 97390.0, "prePrice": 97400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:57.073000", "open": 97400.0, "close": 97400.0, "low": 97390.0, "high": 97400.0, "volume": 0.052114978432655334, "split": "", "dividend": "", "curPrice": 97400.0, "prePrice": 97390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:58.035000", "open": 97400.0, "close": 97300.0, "low": 97220.0, "high": 97400.0, "volume": 3.290340669453144, "split": "", "dividend": "", "curPrice": 97300.0, "prePrice": 97400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:31:59.037000", "open": 97240.0, "close": 97240.0, "low": 97220.0, "high": 97400.0, "volume": 33.727376440539956, "split": "", "dividend": "", "curPrice": 97240.0, "prePrice": 97300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:00.115000", "open": 97220.0, "close": 97140.0, "low": 97140.0, "high": 97390.0, "volume": 21.987389830872416, "split": "", "dividend": "", "curPrice": 97140.0, "prePrice": 97240.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:01.088000", "open": 97140.0, "close": 97150.0, "low": 97120.0, "high": 97210.0, "volume": 1.4393103402107954, "split": "", "dividend": "", "curPrice": 97150.0, "prePrice": 97140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:02.027000", "open": 97150.0, "close": 97130.0, "low": 97100.0, "high": 97220.0, "volume": 10.295480279251933, "split": "", "dividend": "", "curPrice": 97130.0, "prePrice": 97150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:03.001000", "open": 97130.0, "close": 97130.0, "low": 97100.0, "high": 97220.0, "volume": 17.397625170648098, "split": "", "dividend": "", "curPrice": 97130.0, "prePrice": 97130.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:04.172000", "open": 97130.0, "close": 97090.0, "low": 97090.0, "high": 97160.0, "volume": 5.7067135609686375, "split": "", "dividend": "", "curPrice": 97090.0, "prePrice": 97130.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:05.088000", "open": 97090.0, "close": 97090.0, "low": 97080.0, "high": 97130.0, "volume": 0.0802315715700388, "split": "", "dividend": "", "curPrice": 97090.0, "prePrice": 97090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:06.068000", "open": 97090.0, "close": 97140.0, "low": 97070.0, "high": 97140.0, "volume": 1.0294420402497053, "split": "", "dividend": "", "curPrice": 97140.0, "prePrice": 97090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:07.035000", "open": 97070.0, "close": 97060.0, "low": 97040.0, "high": 97130.0, "volume": 1.1201590597629547, "split": "", "dividend": "", "curPrice": 97060.0, "prePrice": 97140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:08.011000", "open": 97060.0, "close": 97070.0, "low": 97060.0, "high": 97160.0, "volume": 20.29794698022306, "split": "", "dividend": "", "curPrice": 97070.0, "prePrice": 97060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:09.157000", "open": 97100.0, "close": 96910.0, "low": 96910.0, "high": 97120.0, "volume": 3.0922369211912155, "split": "", "dividend": "", "curPrice": 96910.0, "prePrice": 97070.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:10.024000", "open": 97040.0, "close": 97020.0, "low": 96910.0, "high": 97160.0, "volume": 8.779477899894118, "split": "", "dividend": "", "curPrice": 97020.0, "prePrice": 96910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:11.350000", "open": 97040.0, "close": 97040.0, "low": 96910.0, "high": 97220.0, "volume": 0.6677796896547079, "split": "", "dividend": "", "curPrice": 97040.0, "prePrice": 97020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:12.008000", "open": 96930.0, "close": 97040.0, "low": 96870.0, "high": 97120.0, "volume": 23.47781520150602, "split": "", "dividend": "", "curPrice": 97040.0, "prePrice": 97040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:13.150000", "open": 97040.0, "close": 96950.0, "low": 96820.0, "high": 97120.0, "volume": 6.190895700827241, "split": "", "dividend": "", "curPrice": 96950.0, "prePrice": 97040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:14.005000", "open": 96910.0, "close": 96520.0, "low": 96520.0, "high": 97040.0, "volume": 4.3908460810780525, "split": "", "dividend": "", "curPrice": 96520.0, "prePrice": 96950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:15.019000", "open": 96510.0, "close": 96510.0, "low": 96450.0, "high": 96950.0, "volume": 13.153552930802107, "split": "", "dividend": "", "curPrice": 96510.0, "prePrice": 96520.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:16.133000", "open": 96510.0, "close": 96310.0, "low": 96290.0, "high": 96890.0, "volume": 3.3088089004158974, "split": "", "dividend": "", "curPrice": 96310.0, "prePrice": 96510.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:17.022000", "open": 96430.0, "close": 96310.0, "low": 96220.0, "high": 96740.0, "volume": 40.89418604038656, "split": "", "dividend": "", "curPrice": 96310.0, "prePrice": 96310.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:18.248000", "open": 96310.0, "close": 96220.0, "low": 96110.0, "high": 96440.0, "volume": 12.386724438518286, "split": "", "dividend": "", "curPrice": 96220.0, "prePrice": 96310.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:19.048000", "open": 96290.0, "close": 96230.0, "low": 96110.0, "high": 96480.0, "volume": 1.691435020416975, "split": "", "dividend": "", "curPrice": 96230.0, "prePrice": 96220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:20.096000", "open": 96400.0, "close": 96320.0, "low": 96310.0, "high": 96560.0, "volume": 2.0611565094441175, "split": "", "dividend": "", "curPrice": 96320.0, "prePrice": 96230.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:21.023000", "open": 96400.0, "close": 96280.0, "low": 96230.0, "high": 96560.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 96280.0, "prePrice": 96320.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:22.012000", "open": 96330.0, "close": 96500.0, "low": 96330.0, "high": 96500.0, "volume": 4.700505958870053, "split": "", "dividend": "", "curPrice": 96500.0, "prePrice": 96280.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:23.004000", "open": 96400.0, "close": 96400.0, "low": 96360.0, "high": 96560.0, "volume": 6.108934819698334, "split": "", "dividend": "", "curPrice": 96400.0, "prePrice": 96500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:24.256000", "open": 96410.0, "close": 96440.0, "low": 96330.0, "high": 96650.0, "volume": 3.8735270109027624, "split": "", "dividend": "", "curPrice": 96440.0, "prePrice": 96400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:25.084000", "open": 96400.0, "close": 96650.0, "low": 96400.0, "high": 96820.0, "volume": 21.96049550920725, "split": "", "dividend": "", "curPrice": 96650.0, "prePrice": 96440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:26.067000", "open": 96560.0, "close": 96650.0, "low": 96480.0, "high": 96660.0, "volume": 1.034661140292883, "split": "", "dividend": "", "curPrice": 96650.0, "prePrice": 96650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:27.266000", "open": 96480.0, "close": 96700.0, "low": 96480.0, "high": 96850.0, "volume": 0.14344650134444237, "split": "", "dividend": "", "curPrice": 96700.0, "prePrice": 96650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:28.190000", "open": 96700.0, "close": 96590.0, "low": 96550.0, "high": 96760.0, "volume": 3.636040098965168, "split": "", "dividend": "", "curPrice": 96590.0, "prePrice": 96700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:29.302000", "open": 96560.0, "close": 96740.0, "low": 96560.0, "high": 96740.0, "volume": 3.748078530654311, "split": "", "dividend": "", "curPrice": 96740.0, "prePrice": 96590.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:30.141000", "open": 96680.0, "close": 96660.0, "low": 96630.0, "high": 96750.0, "volume": 0.4825160298496485, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96740.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:31.117000", "open": 96660.0, "close": 96660.0, "low": 96480.0, "high": 96800.0, "volume": 0.6651825103908777, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:32.126000", "open": 96800.0, "close": 96660.0, "low": 96590.0, "high": 96800.0, "volume": 0.01217246986925602, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:33.024000", "open": 96660.0, "close": 96800.0, "low": 96640.0, "high": 96800.0, "volume": 0.2678716108202934, "split": "", "dividend": "", "curPrice": 96800.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:34.104000", "open": 96700.0, "close": 96800.0, "low": 96640.0, "high": 96800.0, "volume": 9.231342969462276, "split": "", "dividend": "", "curPrice": 96800.0, "prePrice": 96800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:35.139000", "open": 96740.0, "close": 96790.0, "low": 96690.0, "high": 96820.0, "volume": 1.41804938018322, "split": "", "dividend": "", "curPrice": 96790.0, "prePrice": 96800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:36.052000", "open": 96790.0, "close": 96790.0, "low": 96790.0, "high": 96790.0, "volume": 6.241006299853325, "split": "", "dividend": "", "curPrice": 96790.0, "prePrice": 96790.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:37.188000", "open": 96760.0, "close": 96700.0, "low": 96700.0, "high": 96790.0, "volume": 0.8671251200139523, "split": "", "dividend": "", "curPrice": 96700.0, "prePrice": 96790.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:38.205000", "open": 96680.0, "close": 96600.0, "low": 96540.0, "high": 96790.0, "volume": 3.9936355110257864, "split": "", "dividend": "", "curPrice": 96600.0, "prePrice": 96700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:39.309000", "open": 96690.0, "close": 96660.0, "low": 96510.0, "high": 96690.0, "volume": 7.217506488785148, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:40.034000", "open": 96690.0, "close": 96600.0, "low": 96600.0, "high": 96740.0, "volume": 2.850545020774007, "split": "", "dividend": "", "curPrice": 96600.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:41.074000", "open": 96650.0, "close": 96690.0, "low": 96540.0, "high": 96690.0, "volume": 3.0129382498562336, "split": "", "dividend": "", "curPrice": 96690.0, "prePrice": 96600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:42.090000", "open": 96700.0, "close": 96600.0, "low": 96600.0, "high": 96700.0, "volume": 0.5878530107438564, "split": "", "dividend": "", "curPrice": 96600.0, "prePrice": 96690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:43.160000", "open": 96600.0, "close": 96690.0, "low": 96600.0, "high": 96690.0, "volume": 5.171165579929948, "split": "", "dividend": "", "curPrice": 96690.0, "prePrice": 96600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:44.144000", "open": 96660.0, "close": 96690.0, "low": 96660.0, "high": 96690.0, "volume": 5.782095439732075, "split": "", "dividend": "", "curPrice": 96690.0, "prePrice": 96690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:45.124000", "open": 96670.0, "close": 96690.0, "low": 96660.0, "high": 96690.0, "volume": 1.1813010592013597, "split": "", "dividend": "", "curPrice": 96690.0, "prePrice": 96690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:46.013000", "open": 96660.0, "close": 96660.0, "low": 96660.0, "high": 96690.0, "volume": 7.90054870955646, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:47.084000", "open": 96660.0, "close": 96700.0, "low": 96660.0, "high": 96760.0, "volume": 6.007535479962826, "split": "", "dividend": "", "curPrice": 96700.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:48.015000", "open": 96690.0, "close": 96690.0, "low": 96560.0, "high": 96760.0, "volume": 0.07233300060033798, "split": "", "dividend": "", "curPrice": 96690.0, "prePrice": 96700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:49.016000", "open": 96660.0, "close": 96790.0, "low": 96570.0, "high": 96790.0, "volume": 51.51295454055071, "split": "", "dividend": "", "curPrice": 96790.0, "prePrice": 96690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:50.113000", "open": 96790.0, "close": 96660.0, "low": 96660.0, "high": 96800.0, "volume": 4.232985919341445, "split": "", "dividend": "", "curPrice": 96660.0, "prePrice": 96790.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:51.137000", "open": 96560.0, "close": 96800.0, "low": 96520.0, "high": 96840.0, "volume": 28.84238138049841, "split": "", "dividend": "", "curPrice": 96800.0, "prePrice": 96660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:52.051000", "open": 96790.0, "close": 96890.0, "low": 96790.0, "high": 96890.0, "volume": 3.8002602588385344, "split": "", "dividend": "", "curPrice": 96890.0, "prePrice": 96800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:53.191000", "open": 96890.0, "close": 96850.0, "low": 96840.0, "high": 96910.0, "volume": 3.603648640215397, "split": "", "dividend": "", "curPrice": 96850.0, "prePrice": 96890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:54.196000", "open": 96880.0, "close": 96970.0, "low": 96840.0, "high": 96970.0, "volume": 0.2175724394619465, "split": "", "dividend": "", "curPrice": 96970.0, "prePrice": 96850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:55.018000", "open": 96970.0, "close": 96960.0, "low": 96940.0, "high": 96970.0, "volume": 5.430907748639584, "split": "", "dividend": "", "curPrice": 96960.0, "prePrice": 96970.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:56.235000", "open": 96980.0, "close": 97100.0, "low": 96960.0, "high": 97100.0, "volume": 0.4659938309341669, "split": "", "dividend": "", "curPrice": 97100.0, "prePrice": 96960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:57.014000", "open": 97100.0, "close": 97110.0, "low": 97000.0, "high": 97110.0, "volume": 1.9901348911225796, "split": "", "dividend": "", "curPrice": 97110.0, "prePrice": 97100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:58.152000", "open": 97110.0, "close": 97180.0, "low": 97090.0, "high": 97180.0, "volume": 1.5363449212163687, "split": "", "dividend": "", "curPrice": 97180.0, "prePrice": 97110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:32:59.085000", "open": 97170.0, "close": 97170.0, "low": 97110.0, "high": 97170.0, "volume": 5.062478130683303, "split": "", "dividend": "", "curPrice": 97170.0, "prePrice": 97180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:00.064000", "open": 97110.0, "close": 97180.0, "low": 97110.0, "high": 97180.0, "volume": 0.9032014086842537, "split": "", "dividend": "", "curPrice": 97180.0, "prePrice": 97170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:01.080000", "open": 97170.0, "close": 97180.0, "low": 97170.0, "high": 97180.0, "volume": 6.416106620803475, "split": "", "dividend": "", "curPrice": 97180.0, "prePrice": 97180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:02.038000", "open": 97180.0, "close": 97290.0, "low": 97110.0, "high": 97290.0, "volume": 0.2829992789775133, "split": "", "dividend": "", "curPrice": 97290.0, "prePrice": 97180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:03.035000", "open": 97170.0, "close": 97170.0, "low": 97100.0, "high": 97300.0, "volume": 4.689309138804674, "split": "", "dividend": "", "curPrice": 97170.0, "prePrice": 97290.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:04.077000", "open": 97180.0, "close": 97300.0, "low": 97110.0, "high": 97390.0, "volume": 8.931965589523315, "split": "", "dividend": "", "curPrice": 97300.0, "prePrice": 97170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:05.009000", "open": 97290.0, "close": 97390.0, "low": 97290.0, "high": 97390.0, "volume": 4.1052880100905895, "split": "", "dividend": "", "curPrice": 97390.0, "prePrice": 97300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:06.012000", "open": 97330.0, "close": 97390.0, "low": 97300.0, "high": 97390.0, "volume": 2.236050920560956, "split": "", "dividend": "", "curPrice": 97390.0, "prePrice": 97390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:07.128000", "open": 97300.0, "close": 97410.0, "low": 97300.0, "high": 97420.0, "volume": 21.367521369829774, "split": "", "dividend": "", "curPrice": 97410.0, "prePrice": 97390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:08.004000", "open": 97410.0, "close": 97470.0, "low": 97410.0, "high": 97470.0, "volume": 29.0633528213948, "split": "", "dividend": "", "curPrice": 97470.0, "prePrice": 97410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:09.164000", "open": 97450.0, "close": 97470.0, "low": 97390.0, "high": 97500.0, "volume": 3.561736539006233, "split": "", "dividend": "", "curPrice": 97470.0, "prePrice": 97470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:10.059000", "open": 97470.0, "close": 97430.0, "low": 97400.0, "high": 97500.0, "volume": 0.262743029743433, "split": "", "dividend": "", "curPrice": 97430.0, "prePrice": 97470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:11.113000", "open": 97500.0, "close": 97450.0, "low": 97440.0, "high": 97500.0, "volume": 0.517726220190525, "split": "", "dividend": "", "curPrice": 97450.0, "prePrice": 97430.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:12.046000", "open": 97470.0, "close": 97500.0, "low": 97450.0, "high": 97500.0, "volume": 1.2061226889491081, "split": "", "dividend": "", "curPrice": 97500.0, "prePrice": 97450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:13.066000", "open": 97500.0, "close": 97470.0, "low": 97460.0, "high": 97560.0, "volume": 4.279987839981914, "split": "", "dividend": "", "curPrice": 97470.0, "prePrice": 97500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:14.037000", "open": 97460.0, "close": 97600.0, "low": 97460.0, "high": 97600.0, "volume": 4.563574189320207, "split": "", "dividend": "", "curPrice": 97600.0, "prePrice": 97470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:15.221000", "open": 97640.0, "close": 97570.0, "low": 97500.0, "high": 97650.0, "volume": 1.5240805596113205, "split": "", "dividend": "", "curPrice": 97570.0, "prePrice": 97600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:16.026000", "open": 97590.0, "close": 97650.0, "low": 97590.0, "high": 97680.0, "volume": 2.4222604501992464, "split": "", "dividend": "", "curPrice": 97650.0, "prePrice": 97570.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:17.107000", "open": 97660.0, "close": 97830.0, "low": 97590.0, "high": 97830.0, "volume": 1.8013880085200071, "split": "", "dividend": "", "curPrice": 97830.0, "prePrice": 97650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:18.079000", "open": 97880.0, "close": 97990.0, "low": 97690.0, "high": 97990.0, "volume": 0.6880191788077354, "split": "", "dividend": "", "curPrice": 97990.0, "prePrice": 97830.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:19.082000", "open": 98000.0, "close": 97960.0, "low": 97800.0, "high": 98000.0, "volume": 0.1464966107159853, "split": "", "dividend": "", "curPrice": 97960.0, "prePrice": 97990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:20.037000", "open": 97970.0, "close": 97840.0, "low": 97840.0, "high": 98000.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 97840.0, "prePrice": 97960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:21.026000", "open": 98000.0, "close": 98000.0, "low": 97860.0, "high": 98000.0, "volume": 65.6020918302238, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 97840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:22.035000", "open": 98000.0, "close": 98000.0, "low": 97860.0, "high": 98000.0, "volume": 34.49632843025029, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:23.006000", "open": 97890.0, "close": 97950.0, "low": 97890.0, "high": 97990.0, "volume": 0.510464521124959, "split": "", "dividend": "", "curPrice": 97950.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:24.014000", "open": 97900.0, "close": 97890.0, "low": 97890.0, "high": 98000.0, "volume": 10.207388270646334, "split": "", "dividend": "", "curPrice": 97890.0, "prePrice": 97950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:25.081000", "open": 97890.0, "close": 98000.0, "low": 97890.0, "high": 98040.0, "volume": 1.3028850108385086, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 97890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:26.046000", "open": 98000.0, "close": 98030.0, "low": 97920.0, "high": 98060.0, "volume": 4.87237505055964, "split": "", "dividend": "", "curPrice": 98030.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:27.074000", "open": 98020.0, "close": 98400.0, "low": 98000.0, "high": 98400.0, "volume": 0.6844817008823156, "split": "", "dividend": "", "curPrice": 98400.0, "prePrice": 98030.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:28.090000", "open": 98300.0, "close": 98060.0, "low": 98050.0, "high": 98650.0, "volume": 75.20541528984904, "split": "", "dividend": "", "curPrice": 98060.0, "prePrice": 98400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:29.104000", "open": 98470.0, "close": 98080.0, "low": 98080.0, "high": 98850.0, "volume": 4.370521930977702, "split": "", "dividend": "", "curPrice": 98080.0, "prePrice": 98060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:30.066000", "open": 98280.0, "close": 98650.0, "low": 98080.0, "high": 98900.0, "volume": 31.599249869585037, "split": "", "dividend": "", "curPrice": 98650.0, "prePrice": 98080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:31", "open": 98670.0, "close": 98910.0, "low": 98470.0, "high": 98910.0, "volume": 6.588808549568057, "split": "", "dividend": "", "curPrice": 98910.0, "prePrice": 98650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:32.055000", "open": 98810.0, "close": 98920.0, "low": 98330.0, "high": 98930.0, "volume": 8.201425390318036, "split": "", "dividend": "", "curPrice": 98920.0, "prePrice": 98910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:33.015000", "open": 98900.0, "close": 98950.0, "low": 98880.0, "high": 99000.0, "volume": 11.841596759855747, "split": "", "dividend": "", "curPrice": 98950.0, "prePrice": 98920.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:34.074000", "open": 99000.0, "close": 98920.0, "low": 98690.0, "high": 99100.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 98920.0, "prePrice": 98950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:35.052000", "open": 98880.0, "close": 98940.0, "low": 98880.0, "high": 99110.0, "volume": 7.508822180330753, "split": "", "dividend": "", "curPrice": 98940.0, "prePrice": 98920.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:36.016000", "open": 99040.0, "close": 99200.0, "low": 98940.0, "high": 99200.0, "volume": 2.7362399101257324, "split": "", "dividend": "", "curPrice": 99200.0, "prePrice": 98940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:37.042000", "open": 98990.0, "close": 98950.0, "low": 98950.0, "high": 99240.0, "volume": 5.230755008757114, "split": "", "dividend": "", "curPrice": 98950.0, "prePrice": 99200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:38.003000", "open": 98950.0, "close": 98960.0, "low": 98920.0, "high": 99290.0, "volume": 50.469365099444985, "split": "", "dividend": "", "curPrice": 98960.0, "prePrice": 98950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:39.006000", "open": 98930.0, "close": 99300.0, "low": 98900.0, "high": 99300.0, "volume": 3.686525670811534, "split": "", "dividend": "", "curPrice": 99300.0, "prePrice": 98960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:40.036000", "open": 99300.0, "close": 98990.0, "low": 98900.0, "high": 99300.0, "volume": 14.226656399667263, "split": "", "dividend": "", "curPrice": 98990.0, "prePrice": 99300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:41.019000", "open": 98930.0, "close": 99020.0, "low": 98900.0, "high": 99020.0, "volume": 1.1492425706237555, "split": "", "dividend": "", "curPrice": 99020.0, "prePrice": 98990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:42.059000", "open": 98920.0, "close": 99000.0, "low": 98900.0, "high": 99100.0, "volume": 6.963321099057794, "split": "", "dividend": "", "curPrice": 99000.0, "prePrice": 99020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:43.004000", "open": 98990.0, "close": 99090.0, "low": 98850.0, "high": 99300.0, "volume": 151.36226033978164, "split": "", "dividend": "", "curPrice": 99090.0, "prePrice": 99000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:44.008000", "open": 99000.0, "close": 99000.0, "low": 98850.0, "high": 99300.0, "volume": 0.652997151017189, "split": "", "dividend": "", "curPrice": 99000.0, "prePrice": 99090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:45.106000", "open": 99000.0, "close": 98470.0, "low": 98470.0, "high": 99090.0, "volume": 2.117194129154086, "split": "", "dividend": "", "curPrice": 98470.0, "prePrice": 99000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:46.053000", "open": 98470.0, "close": 98040.0, "low": 98040.0, "high": 98990.0, "volume": 1.73401765152812, "split": "", "dividend": "", "curPrice": 98040.0, "prePrice": 98470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:47.041000", "open": 98080.0, "close": 98490.0, "low": 98010.0, "high": 98560.0, "volume": 5.149106839671731, "split": "", "dividend": "", "curPrice": 98490.0, "prePrice": 98040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:48.037000", "open": 98470.0, "close": 98000.0, "low": 98000.0, "high": 98650.0, "volume": 25.734092250466347, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 98490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:49.010000", "open": 98090.0, "close": 98080.0, "low": 97960.0, "high": 98290.0, "volume": 3.9393780194222927, "split": "", "dividend": "", "curPrice": 98080.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:50.031000", "open": 98050.0, "close": 98040.0, "low": 97920.0, "high": 98160.0, "volume": 10.218229450285435, "split": "", "dividend": "", "curPrice": 98040.0, "prePrice": 98080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:51.082000", "open": 98260.0, "close": 98130.0, "low": 98040.0, "high": 98440.0, "volume": 14.362103091552854, "split": "", "dividend": "", "curPrice": 98130.0, "prePrice": 98040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:52.058000", "open": 98180.0, "close": 98400.0, "low": 98090.0, "high": 98440.0, "volume": 884.7126029711217, "split": "", "dividend": "", "curPrice": 98400.0, "prePrice": 98130.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:53.035000", "open": 98440.0, "close": 98290.0, "low": 98090.0, "high": 98650.0, "volume": 2.4356018099933863, "split": "", "dividend": "", "curPrice": 98290.0, "prePrice": 98400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:54.047000", "open": 98400.0, "close": 98160.0, "low": 98140.0, "high": 98650.0, "volume": 0.21993407979607582, "split": "", "dividend": "", "curPrice": 98160.0, "prePrice": 98290.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:55.040000", "open": 98140.0, "close": 98260.0, "low": 98140.0, "high": 98650.0, "volume": 132.23267548158765, "split": "", "dividend": "", "curPrice": 98260.0, "prePrice": 98160.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:56.074000", "open": 98260.0, "close": 98650.0, "low": 98160.0, "high": 98650.0, "volume": 9.843041049316525, "split": "", "dividend": "", "curPrice": 98650.0, "prePrice": 98260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:57.038000", "open": 98160.0, "close": 98470.0, "low": 98140.0, "high": 98650.0, "volume": 14.051894310861826, "split": "", "dividend": "", "curPrice": 98470.0, "prePrice": 98650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:58.026000", "open": 98630.0, "close": 98470.0, "low": 98470.0, "high": 98650.0, "volume": 11.328168120235205, "split": "", "dividend": "", "curPrice": 98470.0, "prePrice": 98470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:33:59.192000", "open": 98650.0, "close": 98590.0, "low": 98470.0, "high": 98650.0, "volume": 5.071498120203614, "split": "", "dividend": "", "curPrice": 98590.0, "prePrice": 98470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:00", "open": 98590.0, "close": 98400.0, "low": 98400.0, "high": 98590.0, "volume": 0.6046917103230953, "split": "", "dividend": "", "curPrice": 98400.0, "prePrice": 98590.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:01.031000", "open": 98440.0, "close": 98470.0, "low": 98420.0, "high": 98470.0, "volume": 21.526566460728645, "split": "", "dividend": "", "curPrice": 98470.0, "prePrice": 98400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:02.142000", "open": 98470.0, "close": 98400.0, "low": 98260.0, "high": 98470.0, "volume": 1.94489137083292, "split": "", "dividend": "", "curPrice": 98400.0, "prePrice": 98470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:03.014000", "open": 98400.0, "close": 98440.0, "low": 98160.0, "high": 98470.0, "volume": 7.689172251150012, "split": "", "dividend": "", "curPrice": 98440.0, "prePrice": 98400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:04.004000", "open": 98420.0, "close": 98420.0, "low": 98160.0, "high": 98470.0, "volume": 7.878430150449276, "split": "", "dividend": "", "curPrice": 98420.0, "prePrice": 98440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:05.072000", "open": 98160.0, "close": 98370.0, "low": 98160.0, "high": 98400.0, "volume": 0.809670090675354, "split": "", "dividend": "", "curPrice": 98370.0, "prePrice": 98420.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:06.020000", "open": 98160.0, "close": 98260.0, "low": 98150.0, "high": 98400.0, "volume": 0.05681817978620529, "split": "", "dividend": "", "curPrice": 98260.0, "prePrice": 98370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:07.113000", "open": 98260.0, "close": 98130.0, "low": 98060.0, "high": 98290.0, "volume": 20.72765576094389, "split": "", "dividend": "", "curPrice": 98130.0, "prePrice": 98260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:08.060000", "open": 98150.0, "close": 98260.0, "low": 98030.0, "high": 98260.0, "volume": 7.102713260799646, "split": "", "dividend": "", "curPrice": 98260.0, "prePrice": 98130.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:09.118000", "open": 98090.0, "close": 98120.0, "low": 98010.0, "high": 98260.0, "volume": 7.370290430262685, "split": "", "dividend": "", "curPrice": 98120.0, "prePrice": 98260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:10.100000", "open": 98130.0, "close": 98040.0, "low": 98000.0, "high": 98150.0, "volume": 0.4269175808876753, "split": "", "dividend": "", "curPrice": 98040.0, "prePrice": 98120.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:11.002000", "open": 98050.0, "close": 98000.0, "low": 98000.0, "high": 98090.0, "volume": 5.149330589920282, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 98040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:12.033000", "open": 98090.0, "close": 97850.0, "low": 97810.0, "high": 98090.0, "volume": 3.592581629753113, "split": "", "dividend": "", "curPrice": 97850.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:13.013000", "open": 97870.0, "close": 97750.0, "low": 97750.0, "high": 98000.0, "volume": 1.2068084795027971, "split": "", "dividend": "", "curPrice": 97750.0, "prePrice": 97850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:14.022000", "open": 97720.0, "close": 97890.0, "low": 97500.0, "high": 97960.0, "volume": 10.215548058971763, "split": "", "dividend": "", "curPrice": 97890.0, "prePrice": 97750.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:15.113000", "open": 97560.0, "close": 97500.0, "low": 97490.0, "high": 97960.0, "volume": 8.611463159322739, "split": "", "dividend": "", "curPrice": 97500.0, "prePrice": 97890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:16.106000", "open": 97500.0, "close": 97510.0, "low": 97390.0, "high": 97780.0, "volume": 7.126021409407258, "split": "", "dividend": "", "curPrice": 97510.0, "prePrice": 97500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:17.033000", "open": 97580.0, "close": 97520.0, "low": 97500.0, "high": 97850.0, "volume": 32.130576461553574, "split": "", "dividend": "", "curPrice": 97520.0, "prePrice": 97510.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:18.027000", "open": 97510.0, "close": 97490.0, "low": 97490.0, "high": 97890.0, "volume": 3.724297059699893, "split": "", "dividend": "", "curPrice": 97490.0, "prePrice": 97520.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:19.057000", "open": 97500.0, "close": 97600.0, "low": 97500.0, "high": 97670.0, "volume": 14.707670470699668, "split": "", "dividend": "", "curPrice": 97600.0, "prePrice": 97490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:20.132000", "open": 97620.0, "close": 97890.0, "low": 97590.0, "high": 97960.0, "volume": 3.2467331998050213, "split": "", "dividend": "", "curPrice": 97890.0, "prePrice": 97600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:21.015000", "open": 97890.0, "close": 97660.0, "low": 97630.0, "high": 97960.0, "volume": 1.172639049589634, "split": "", "dividend": "", "curPrice": 97660.0, "prePrice": 97890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:22.093000", "open": 97850.0, "close": 97890.0, "low": 97630.0, "high": 97960.0, "volume": 2.638968098908663, "split": "", "dividend": "", "curPrice": 97890.0, "prePrice": 97660.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:23.073000", "open": 97890.0, "close": 97850.0, "low": 97780.0, "high": 97960.0, "volume": 0.2917263302952051, "split": "", "dividend": "", "curPrice": 97850.0, "prePrice": 97890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:24.007000", "open": 97960.0, "close": 97960.0, "low": 97850.0, "high": 97960.0, "volume": 2.532411180436611, "split": "", "dividend": "", "curPrice": 97960.0, "prePrice": 97850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:25.258000", "open": 97890.0, "close": 97890.0, "low": 97890.0, "high": 97960.0, "volume": 2.6510521210730076, "split": "", "dividend": "", "curPrice": 97890.0, "prePrice": 97960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:26.078000", "open": 97920.0, "close": 97920.0, "low": 97890.0, "high": 98000.0, "volume": 0.9207498393952847, "split": "", "dividend": "", "curPrice": 97920.0, "prePrice": 97890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:27.084000", "open": 97960.0, "close": 97960.0, "low": 97890.0, "high": 98000.0, "volume": 1.0206164494156837, "split": "", "dividend": "", "curPrice": 97960.0, "prePrice": 97920.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:28.058000", "open": 97960.0, "close": 98030.0, "low": 97960.0, "high": 98030.0, "volume": 0.8464449606835842, "split": "", "dividend": "", "curPrice": 98030.0, "prePrice": 97960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:29.272000", "open": 98030.0, "close": 98000.0, "low": 98000.0, "high": 98030.0, "volume": 2.332541238516569, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 98030.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:30.117000", "open": 98010.0, "close": 97990.0, "low": 97980.0, "high": 98030.0, "volume": 2.749196570366621, "split": "", "dividend": "", "curPrice": 97990.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:31.229000", "open": 98000.0, "close": 98000.0, "low": 97980.0, "high": 98030.0, "volume": 0.9117477312684059, "split": "", "dividend": "", "curPrice": 98000.0, "prePrice": 97990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:32.076000", "open": 98000.0, "close": 97920.0, "low": 97890.0, "high": 98030.0, "volume": 0.07903788983821869, "split": "", "dividend": "", "curPrice": 97920.0, "prePrice": 98000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:33.015000", "open": 97960.0, "close": 97960.0, "low": 97850.0, "high": 97960.0, "volume": 8.138063620775938, "split": "", "dividend": "", "curPrice": 97960.0, "prePrice": 97920.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:34.194000", "open": 97850.0, "close": 97850.0, "low": 97830.0, "high": 97920.0, "volume": 6.339211579412222, "split": "", "dividend": "", "curPrice": 97850.0, "prePrice": 97960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:35.148000", "open": 97840.0, "close": 97700.0, "low": 97700.0, "high": 97860.0, "volume": 4.367611330002546, "split": "", "dividend": "", "curPrice": 97700.0, "prePrice": 97850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:36.103000", "open": 97720.0, "close": 97820.0, "low": 97700.0, "high": 97840.0, "volume": 19.13547058030963, "split": "", "dividend": "", "curPrice": 97820.0, "prePrice": 97700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:37.078000", "open": 97820.0, "close": 97700.0, "low": 97670.0, "high": 97820.0, "volume": 0.962001159787178, "split": "", "dividend": "", "curPrice": 97700.0, "prePrice": 97820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:38.128000", "open": 97730.0, "close": 97820.0, "low": 97630.0, "high": 97820.0, "volume": 1.5409018900245428, "split": "", "dividend": "", "curPrice": 97820.0, "prePrice": 97700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:39.118000", "open": 97810.0, "close": 97640.0, "low": 97630.0, "high": 97840.0, "volume": 1.0220768600702286, "split": "", "dividend": "", "curPrice": 97640.0, "prePrice": 97820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:40.024000", "open": 97630.0, "close": 97700.0, "low": 97620.0, "high": 97700.0, "volume": 0.06625382974743843, "split": "", "dividend": "", "curPrice": 97700.0, "prePrice": 97640.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:41.178000", "open": 97620.0, "close": 97600.0, "low": 97600.0, "high": 97810.0, "volume": 3.2578117307275534, "split": "", "dividend": "", "curPrice": 97600.0, "prePrice": 97700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:42.095000", "open": 97600.0, "close": 97620.0, "low": 97580.0, "high": 97620.0, "volume": 34.20182999968529, "split": "", "dividend": "", "curPrice": 97620.0, "prePrice": 97600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:43.030000", "open": 97620.0, "close": 97620.0, "low": 97520.0, "high": 97620.0, "volume": 0.5285243708640337, "split": "", "dividend": "", "curPrice": 97620.0, "prePrice": 97620.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:44.066000", "open": 97620.0, "close": 97810.0, "low": 97470.0, "high": 97810.0, "volume": 5.130283199250698, "split": "", "dividend": "", "curPrice": 97810.0, "prePrice": 97620.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
{"date": "2021-04-12 19:34:45", "open": 97620.0, "close": 97620.0, "low": 97440.0, "high": 97710.0, "volume": 9.318796029314399, "split": "", "dividend": "", "curPrice": 97620.0, "prePrice": 97810.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},]


hoka_list = [
{"date": "2021-04-12 19:28:01.363000", "total_ask_size": 478.63084326, "total_bid_size": 2.45220039, "ask_price": 95220.0, "bid_price": 95210.0},

{"date": "2021-04-12 19:28:02.954000", "total_ask_size": 483.58416294, "total_bid_size": 349.72988386, "ask_price": 95220.0, "bid_price": 95200.0},

{"date": "2021-04-12 19:28:03.301000", "total_ask_size": 483.58416294, "total_bid_size": 342.86196603, "ask_price": 95220.0, "bid_price": 95200.0},

{"date": "2021-04-12 19:28:04.885000", "total_ask_size": 434.85750965, "total_bid_size": 231.63981208, "ask_price": 95220.0, "bid_price": 95200.0},

{"date": "2021-04-12 19:28:05.766000", "total_ask_size": 426.69294829, "total_bid_size": 55.33492887, "ask_price": 95220.0, "bid_price": 95200.0},

{"date": "2021-04-12 19:28:06.808000", "total_ask_size": 19.0571735, "total_bid_size": 4.32539623, "ask_price": 95150.0, "bid_price": 95130.0},

{"date": "2021-04-12 19:28:07.700000", "total_ask_size": 30.97579454, "total_bid_size": 67.8965825, "ask_price": 95140.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:28:08.400000", "total_ask_size": 5.03019848, "total_bid_size": 78.47943801, "ask_price": 95110.0, "bid_price": 95100.0},

{"date": "2021-04-12 19:28:09.988000", "total_ask_size": 5.97565421, "total_bid_size": 1.65085078, "ask_price": 95090.0, "bid_price": 95050.0},

{"date": "2021-04-12 19:28:10.687000", "total_ask_size": 73.81313126, "total_bid_size": 1.17117961, "ask_price": 95090.0, "bid_price": 95060.0},

{"date": "2021-04-12 19:28:11.573000", "total_ask_size": 89.18383497, "total_bid_size": 27.4773889, "ask_price": 95090.0, "bid_price": 95000.0},

{"date": "2021-04-12 19:28:12.623000", "total_ask_size": 86.11332915, "total_bid_size": 2.91843917, "ask_price": 95050.0, "bid_price": 95000.0},

{"date": "2021-04-12 19:28:13.857000", "total_ask_size": 376.27954653, "total_bid_size": 260.49051779, "ask_price": 94930.0, "bid_price": 94890.0},

{"date": "2021-04-12 19:28:14.564000", "total_ask_size": 366.27954653, "total_bid_size": 244.34906771, "ask_price": 94930.0, "bid_price": 94890.0},

{"date": "2021-04-12 19:28:15.265000", "total_ask_size": 0.36912454, "total_bid_size": 168.13041651, "ask_price": 94910.0, "bid_price": 94890.0},

{"date": "2021-04-12 19:28:16.855000", "total_ask_size": 90.89926863, "total_bid_size": 1.4364831, "ask_price": 94890.0, "bid_price": 94860.0},

{"date": "2021-04-12 19:28:17.752000", "total_ask_size": 210.52427485, "total_bid_size": 176.87388597, "ask_price": 94860.0, "bid_price": 94750.0},

{"date": "2021-04-12 19:28:18.794000", "total_ask_size": 3.78034928, "total_bid_size": 6.42759034, "ask_price": 94830.0, "bid_price": 94760.0},

{"date": "2021-04-12 19:28:19.683000", "total_ask_size": 3.55949314, "total_bid_size": 221.21375657, "ask_price": 94800.0, "bid_price": 94780.0},

{"date": "2021-04-12 19:28:20.732000", "total_ask_size": 369.33985338, "total_bid_size": 24.06609892, "ask_price": 94860.0, "bid_price": 94820.0},

{"date": "2021-04-12 19:28:21.965000", "total_ask_size": 2.64204477, "total_bid_size": 268.34561275, "ask_price": 94850.0, "bid_price": 94790.0},

{"date": "2021-04-12 19:28:22.661000", "total_ask_size": 28.90333497, "total_bid_size": 103.19904503, "ask_price": 94820.0, "bid_price": 94790.0},

{"date": "2021-04-12 19:28:23.546000", "total_ask_size": 0.28531851, "total_bid_size": 45.8341211, "ask_price": 94900.0, "bid_price": 94890.0},

{"date": "2021-04-12 19:28:24.588000", "total_ask_size": 92.46634213, "total_bid_size": 9.16785669, "ask_price": 94990.0, "bid_price": 94930.0},

{"date": "2021-04-12 19:28:25.818000", "total_ask_size": 59.64977262, "total_bid_size": 0.21318488, "ask_price": 95000.0, "bid_price": 94990.0},

{"date": "2021-04-12 19:28:26.512000", "total_ask_size": 26.26112227, "total_bid_size": 110.80083576, "ask_price": 95050.0, "bid_price": 95010.0},

{"date": "2021-04-12 19:28:27.744000", "total_ask_size": 320.72491086, "total_bid_size": 29.90402403, "ask_price": 95080.0, "bid_price": 94940.0},

{"date": "2021-04-12 19:28:28.439000", "total_ask_size": 215.55032105, "total_bid_size": 38.58743517, "ask_price": 95080.0, "bid_price": 95050.0},

{"date": "2021-04-12 19:28:29.668000", "total_ask_size": 104.18767837, "total_bid_size": 43.96401857, "ask_price": 95100.0, "bid_price": 95090.0},

{"date": "2021-04-12 19:28:30.725000", "total_ask_size": 335.5604894, "total_bid_size": 107.61897696, "ask_price": 95100.0, "bid_price": 95010.0},

{"date": "2021-04-12 19:28:31.960000", "total_ask_size": 135.41295487, "total_bid_size": 2.09163299, "ask_price": 95050.0, "bid_price": 94930.0},

{"date": "2021-04-12 19:28:32.652000", "total_ask_size": 130.29015611, "total_bid_size": 49.63935363, "ask_price": 95050.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:28:33.884000", "total_ask_size": 82.47797231, "total_bid_size": 45.46829365, "ask_price": 95050.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:28:34.577000", "total_ask_size": 80.02846154, "total_bid_size": 20.70259951, "ask_price": 95050.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:28:35.465000", "total_ask_size": 80.02846154, "total_bid_size": 48.36597405, "ask_price": 95050.0, "bid_price": 94940.0},

{"date": "2021-04-12 19:28:36.508000", "total_ask_size": 9.54154868, "total_bid_size": 1648.51514809, "ask_price": 94940.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:28:37.397000", "total_ask_size": 1.90310756, "total_bid_size": 45.26437752, "ask_price": 95040.0, "bid_price": 95010.0},

{"date": "2021-04-12 19:28:38.792000", "total_ask_size": 102.97131522, "total_bid_size": 120.19053504, "ask_price": 95110.0, "bid_price": 95100.0},

{"date": "2021-04-12 19:28:39.676000", "total_ask_size": 86.30181593, "total_bid_size": 33.67506454, "ask_price": 95110.0, "bid_price": 95100.0},

{"date": "2021-04-12 19:28:40.725000", "total_ask_size": 37.62168964, "total_bid_size": 0.00305496, "ask_price": 95140.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:28:41.609000", "total_ask_size": 45.29785793, "total_bid_size": 86.14399528, "ask_price": 95120.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:28:42.650000", "total_ask_size": 125.82287242, "total_bid_size": 81.93137591, "ask_price": 95110.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:28:43.887000", "total_ask_size": 123.72004412, "total_bid_size": 250.76262156, "ask_price": 95110.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:28:44.923000", "total_ask_size": 123.24668696, "total_bid_size": 4.35454338, "ask_price": 95110.0, "bid_price": 95080.0},

{"date": "2021-04-12 19:28:45.812000", "total_ask_size": 120.67405526, "total_bid_size": 259.65657902, "ask_price": 95110.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:28:46.858000", "total_ask_size": 32.23948258, "total_bid_size": 10.51635292, "ask_price": 95110.0, "bid_price": 95090.0},

{"date": "2021-04-12 19:28:47.746000", "total_ask_size": 13.54121687, "total_bid_size": 10.51635292, "ask_price": 95100.0, "bid_price": 95090.0},

{"date": "2021-04-12 19:28:49.324000", "total_ask_size": 202.88875024, "total_bid_size": 2.50462632, "ask_price": 95100.0, "bid_price": 95090.0},

{"date": "2021-04-12 19:28:49.324000", "total_ask_size": 202.88875024, "total_bid_size": 2.50462632, "ask_price": 95100.0, "bid_price": 95090.0},

{"date": "2021-04-12 19:28:50.714000", "total_ask_size": 42.97163035, "total_bid_size": 9.32287327, "ask_price": 95090.0, "bid_price": 95080.0},

{"date": "2021-04-12 19:28:51.600000", "total_ask_size": 31.1196134, "total_bid_size": 21.24572334, "ask_price": 95090.0, "bid_price": 95030.0},

{"date": "2021-04-12 19:28:52.645000", "total_ask_size": 38.90683922, "total_bid_size": 19.57818285, "ask_price": 95000.0, "bid_price": 94970.0},

{"date": "2021-04-12 19:28:53.527000", "total_ask_size": 32.30003878, "total_bid_size": 9.73894728, "ask_price": 95000.0, "bid_price": 94970.0},

{"date": "2021-04-12 19:28:54.571000", "total_ask_size": 29.45814063, "total_bid_size": 95.36894695, "ask_price": 95000.0, "bid_price": 94960.0},

{"date": "2021-04-12 19:28:55.455000", "total_ask_size": 262.23701632, "total_bid_size": 95.22367206, "ask_price": 94970.0, "bid_price": 94960.0},

{"date": "2021-04-12 19:28:56.846000", "total_ask_size": 22.33212366, "total_bid_size": 28.04013909, "ask_price": 94950.0, "bid_price": 94940.0},

{"date": "2021-04-12 19:28:57.385000", "total_ask_size": 22.33212366, "total_bid_size": 25.85211674, "ask_price": 94950.0, "bid_price": 94940.0},

{"date": "2021-04-12 19:28:58.433000", "total_ask_size": 223.23637034, "total_bid_size": 58.48521999, "ask_price": 94970.0, "bid_price": 94960.0},

{"date": "2021-04-12 19:28:59.323000", "total_ask_size": 2.25051509, "total_bid_size": 125.16691116, "ask_price": 94960.0, "bid_price": 94910.0},

{"date": "2021-04-12 19:29:00.771000", "total_ask_size": 44.90486735, "total_bid_size": 1263.07034403, "ask_price": 94910.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:29:01.660000", "total_ask_size": 41.1336345, "total_bid_size": 876.15974959, "ask_price": 94910.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:29:02.702000", "total_ask_size": 22.66664522, "total_bid_size": 590.0076737, "ask_price": 94930.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:29:03.590000", "total_ask_size": 10.5518624, "total_bid_size": 340.69897255, "ask_price": 94910.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:29:04.637000", "total_ask_size": 7.10635381, "total_bid_size": 365.99703195, "ask_price": 94930.0, "bid_price": 94900.0},

{"date": "2021-04-12 19:29:05.873000", "total_ask_size": 196.97331539, "total_bid_size": 43.16280425, "ask_price": 94900.0, "bid_price": 94890.0},

{"date": "2021-04-12 19:29:06.567000", "total_ask_size": 262.47017349, "total_bid_size": 6.68450753, "ask_price": 94900.0, "bid_price": 94890.0},

{"date": "2021-04-12 19:29:07.452000", "total_ask_size": 21.31184634, "total_bid_size": 44.04908277, "ask_price": 94890.0, "bid_price": 94870.0},

{"date": "2021-04-12 19:29:08.505000", "total_ask_size": 3.48280717, "total_bid_size": 11.24963445, "ask_price": 94890.0, "bid_price": 94880.0},

{"date": "2021-04-12 19:29:09.737000", "total_ask_size": 70.01832915, "total_bid_size": 5.7716115, "ask_price": 94890.0, "bid_price": 94880.0},

{"date": "2021-04-12 19:29:10.433000", "total_ask_size": 31.45441061, "total_bid_size": 10.70925423, "ask_price": 94880.0, "bid_price": 94870.0},

{"date": "2021-04-12 19:29:11.668000", "total_ask_size": 9.43382394, "total_bid_size": 66.92745349, "ask_price": 94880.0, "bid_price": 94860.0},

{"date": "2021-04-12 19:29:12.709000", "total_ask_size": 18.4414504, "total_bid_size": 14.47936675, "ask_price": 94880.0, "bid_price": 94870.0},

{"date": "2021-04-12 19:29:13.597000", "total_ask_size": 53.85706471, "total_bid_size": 32.87274738, "ask_price": 94860.0, "bid_price": 94850.0},

{"date": "2021-04-12 19:29:14.637000", "total_ask_size": 27.73732568, "total_bid_size": 24.64322308, "ask_price": 94880.0, "bid_price": 94870.0},

{"date": "2021-04-12 19:29:15.872000", "total_ask_size": 13.87524697, "total_bid_size": 23.21307715, "ask_price": 94880.0, "bid_price": 94860.0},

{"date": "2021-04-12 19:29:17.102000", "total_ask_size": 89.66270892, "total_bid_size": 668.09362888, "ask_price": 94860.0, "bid_price": 94840.0},

{"date": "2021-04-12 19:29:17.806000", "total_ask_size": 29.27769585, "total_bid_size": 8.72409066, "ask_price": 94860.0, "bid_price": 94850.0},

{"date": "2021-04-12 19:29:18.503000", "total_ask_size": 13.55245048, "total_bid_size": 8.72409066, "ask_price": 94860.0, "bid_price": 94850.0},

{"date": "2021-04-12 19:29:19.736000", "total_ask_size": 23.48639215, "total_bid_size": 1175.30595567, "ask_price": 94930.0, "bid_price": 94910.0},

{"date": "2021-04-12 19:29:20.430000", "total_ask_size": 98.68588709, "total_bid_size": 1095.05811391, "ask_price": 95000.0, "bid_price": 94910.0},

{"date": "2021-04-12 19:29:21.679000", "total_ask_size": 2.98640323, "total_bid_size": 104.21691408, "ask_price": 95000.0, "bid_price": 94940.0},

{"date": "2021-04-12 19:29:22.718000", "total_ask_size": 4.88290397, "total_bid_size": 81.49140684, "ask_price": 95000.0, "bid_price": 94940.0},

{"date": "2021-04-12 19:29:23.613000", "total_ask_size": 109.79898426, "total_bid_size": 5.95895688, "ask_price": 95090.0, "bid_price": 95080.0},

{"date": "2021-04-12 19:29:24.653000", "total_ask_size": 17.46954997, "total_bid_size": 5.03731301, "ask_price": 95090.0, "bid_price": 95050.0},

{"date": "2021-04-12 19:29:26.243000", "total_ask_size": 54.89734314, "total_bid_size": 51.80055574, "ask_price": 95090.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:29:27.133000", "total_ask_size": 40.19904561, "total_bid_size": 6.31313131, "ask_price": 95090.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:29:27.480000", "total_ask_size": 34.79109525, "total_bid_size": 255.2265982, "ask_price": 95090.0, "bid_price": 95000.0},

{"date": "2021-04-12 19:29:28.525000", "total_ask_size": 289.4422181, "total_bid_size": 1.52571931, "ask_price": 95040.0, "bid_price": 95030.0},

{"date": "2021-04-12 19:29:30.110000", "total_ask_size": 170.93724287, "total_bid_size": 35.61449619, "ask_price": 95040.0, "bid_price": 95030.0},

{"date": "2021-04-12 19:29:30.458000", "total_ask_size": 170.93724287, "total_bid_size": 9.34421771, "ask_price": 95040.0, "bid_price": 95030.0},

{"date": "2021-04-12 19:29:31.715000", "total_ask_size": 51.87258264, "total_bid_size": 9.34421771, "ask_price": 95040.0, "bid_price": 95030.0},

{"date": "2021-04-12 19:29:32.406000", "total_ask_size": 21.03357559, "total_bid_size": 56.4526759, "ask_price": 95100.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:29:33.649000", "total_ask_size": 137.50900437, "total_bid_size": 87.4158706, "ask_price": 95200.0, "bid_price": 95040.0},

{"date": "2021-04-12 19:29:34.887000", "total_ask_size": 0.26663067, "total_bid_size": 72.93782551, "ask_price": 95160.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:29:35.588000", "total_ask_size": 29.79595691, "total_bid_size": 617.40755963, "ask_price": 95110.0, "bid_price": 95060.0},

{"date": "2021-04-12 19:29:36.816000", "total_ask_size": 29.59712423, "total_bid_size": 30.00182063, "ask_price": 95190.0, "bid_price": 95100.0},

{"date": "2021-04-12 19:29:37.862000", "total_ask_size": 0.74803068, "total_bid_size": 17.06395149, "ask_price": 95110.0, "bid_price": 95100.0},

{"date": "2021-04-12 19:29:38.559000", "total_ask_size": 145.54819774, "total_bid_size": 2.44052435, "ask_price": 95190.0, "bid_price": 95150.0},

{"date": "2021-04-12 19:29:39.958000", "total_ask_size": 0.45354944, "total_bid_size": 2126.69564234, "ask_price": 95260.0, "bid_price": 95250.0},

{"date": "2021-04-12 19:29:40.305000", "total_ask_size": 9.03817608, "total_bid_size": 2020.46969456, "ask_price": 95270.0, "bid_price": 95250.0},

{"date": "2021-04-12 19:29:41.540000", "total_ask_size": 12.58127843, "total_bid_size": 1945.43453144, "ask_price": 95300.0, "bid_price": 95250.0},

{"date": "2021-04-12 19:29:43.117000", "total_ask_size": 80.85040114, "total_bid_size": 369.24527527, "ask_price": 95360.0, "bid_price": 95300.0},

{"date": "2021-04-12 19:29:43.465000", "total_ask_size": 18.88273275, "total_bid_size": 367.43360878, "ask_price": 95350.0, "bid_price": 95300.0},

{"date": "2021-04-12 19:29:44.705000", "total_ask_size": 97.06110218, "total_bid_size": 30.7961162, "ask_price": 95380.0, "bid_price": 95360.0},

{"date": "2021-04-12 19:29:45.401000", "total_ask_size": 9.38934826, "total_bid_size": 29.89096187, "ask_price": 95370.0, "bid_price": 95360.0},

{"date": "2021-04-12 19:29:46.985000", "total_ask_size": 45.50369126, "total_bid_size": 15.75954185, "ask_price": 95380.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:29:47.678000", "total_ask_size": 46.339019, "total_bid_size": 17.43989408, "ask_price": 95380.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:29:48.920000", "total_ask_size": 4.72068319, "total_bid_size": 8.74337251, "ask_price": 95380.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:29:49.617000", "total_ask_size": 49.95559881, "total_bid_size": 15.50955606, "ask_price": 95390.0, "bid_price": 95380.0},

{"date": "2021-04-12 19:29:51.552000", "total_ask_size": 23.08651948, "total_bid_size": 100.09324649, "ask_price": 95390.0, "bid_price": 95360.0},

{"date": "2021-04-12 19:29:51.899000", "total_ask_size": 133.22858378, "total_bid_size": 97.04515599, "ask_price": 95380.0, "bid_price": 95360.0},

{"date": "2021-04-12 19:29:52.790000", "total_ask_size": 52.77556004, "total_bid_size": 97.04515599, "ask_price": 95370.0, "bid_price": 95360.0},

{"date": "2021-04-12 19:29:53.488000", "total_ask_size": 455.86326677, "total_bid_size": 52.54981409, "ask_price": 95300.0, "bid_price": 95270.0},

{"date": "2021-04-12 19:29:54.724000", "total_ask_size": 185.83650653, "total_bid_size": 7.6049232, "ask_price": 95300.0, "bid_price": 95250.0},

{"date": "2021-04-12 19:29:55.766000", "total_ask_size": 4.04795765, "total_bid_size": 227.00150183, "ask_price": 95130.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:29:56.602000", "total_ask_size": 195.92180582, "total_bid_size": 115.5182019, "ask_price": 95300.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:29:57.645000", "total_ask_size": 66.3846588, "total_bid_size": 95.27115195, "ask_price": 95250.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:29:59.572000", "total_ask_size": 38.07423679, "total_bid_size": 107.39194495, "ask_price": 95140.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:30:00.809000", "total_ask_size": 127.22808114, "total_bid_size": 76.69332511, "ask_price": 95250.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:30:01.505000", "total_ask_size": 115.82202342, "total_bid_size": 89.22118749, "ask_price": 95250.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:30:02.742000", "total_ask_size": 50.26415285, "total_bid_size": 4.3371798, "ask_price": 95240.0, "bid_price": 95150.0},

{"date": "2021-04-12 19:30:03.439000", "total_ask_size": 2.36034159, "total_bid_size": 27.00792261, "ask_price": 95230.0, "bid_price": 95110.0},

{"date": "2021-04-12 19:30:05.368000", "total_ask_size": 49.12291525, "total_bid_size": 120.28446662, "ask_price": 95250.0, "bid_price": 95150.0},

{"date": "2021-04-12 19:30:05.720000", "total_ask_size": 48.07304649, "total_bid_size": 120.28446662, "ask_price": 95250.0, "bid_price": 95150.0},

{"date": "2021-04-12 19:30:06.612000", "total_ask_size": 20.39321421, "total_bid_size": 620.21075178, "ask_price": 95300.0, "bid_price": 95240.0},

{"date": "2021-04-12 19:30:07.650000", "total_ask_size": 2.9120723, "total_bid_size": 578.6373037, "ask_price": 95250.0, "bid_price": 95240.0},

{"date": "2021-04-12 19:30:08.885000", "total_ask_size": 2.72412464, "total_bid_size": 276.31124193, "ask_price": 95350.0, "bid_price": 95310.0},

{"date": "2021-04-12 19:30:09.579000", "total_ask_size": 9.41225362, "total_bid_size": 276.31124193, "ask_price": 95370.0, "bid_price": 95310.0},

{"date": "2021-04-12 19:30:11.160000", "total_ask_size": 111.79609361, "total_bid_size": 91.57997283, "ask_price": 95400.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:30:11.509000", "total_ask_size": 109.28162821, "total_bid_size": 88.8189859, "ask_price": 95400.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:30:13.084000", "total_ask_size": 100.7030014, "total_bid_size": 40.83062289, "ask_price": 95400.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:30:14.324000", "total_ask_size": 38.08154653, "total_bid_size": 40.83062289, "ask_price": 95380.0, "bid_price": 95370.0},

{"date": "2021-04-12 19:30:15.370000", "total_ask_size": 104.8927401, "total_bid_size": 71.4921743, "ask_price": 95420.0, "bid_price": 95410.0},

{"date": "2021-04-12 19:30:15.370000", "total_ask_size": 104.8927401, "total_bid_size": 71.4921743, "ask_price": 95420.0, "bid_price": 95410.0},

{"date": "2021-04-12 19:30:16.612000", "total_ask_size": 51.09241393, "total_bid_size": 4.6187867, "ask_price": 95440.0, "bid_price": 95400.0},

{"date": "2021-04-12 19:30:17.308000", "total_ask_size": 25.93430413, "total_bid_size": 11.64647283, "ask_price": 95440.0, "bid_price": 95380.0},

{"date": "2021-04-12 19:30:18.884000", "total_ask_size": 2.8003406, "total_bid_size": 16.21518021, "ask_price": 95420.0, "bid_price": 95380.0},

{"date": "2021-04-12 19:30:19.575000", "total_ask_size": 4.85602832, "total_bid_size": 16.21518021, "ask_price": 95440.0, "bid_price": 95380.0},

{"date": "2021-04-12 19:30:20.813000", "total_ask_size": 11.00148391, "total_bid_size": 87.71888101, "ask_price": 95460.0, "bid_price": 95440.0},

{"date": "2021-04-12 19:30:21.504000", "total_ask_size": 0.26817827, "total_bid_size": 620.57787799, "ask_price": 95440.0, "bid_price": 95420.0},

{"date": "2021-04-12 19:30:22.732000", "total_ask_size": 99.41093046, "total_bid_size": 50.95655713, "ask_price": 95500.0, "bid_price": 95490.0},

{"date": "2021-04-12 19:30:23.774000", "total_ask_size": 196.60841975, "total_bid_size": 12.79853548, "ask_price": 95570.0, "bid_price": 95500.0},

{"date": "2021-04-12 19:30:25.007000", "total_ask_size": 166.80230701, "total_bid_size": 372.55599705, "ask_price": 95570.0, "bid_price": 95500.0},

{"date": "2021-04-12 19:30:25.701000", "total_ask_size": 161.26893881, "total_bid_size": 694.15644906, "ask_price": 95570.0, "bid_price": 95500.0},

{"date": "2021-04-12 19:30:26.588000", "total_ask_size": 19.4175461, "total_bid_size": 681.2868744, "ask_price": 95570.0, "bid_price": 95500.0},

{"date": "2021-04-12 19:30:27.285000", "total_ask_size": 22.85641115, "total_bid_size": 145.60432694, "ask_price": 95620.0, "bid_price": 95580.0},

{"date": "2021-04-12 19:30:28.870000", "total_ask_size": 21.54634321, "total_bid_size": 14.58841115, "ask_price": 95700.0, "bid_price": 95600.0},

{"date": "2021-04-12 19:30:29.570000", "total_ask_size": 286.208565, "total_bid_size": 9.23846275, "ask_price": 95900.0, "bid_price": 95780.0},

{"date": "2021-04-12 19:30:30.805000", "total_ask_size": 15.33325105, "total_bid_size": 3.95125321, "ask_price": 95870.0, "bid_price": 95700.0},

{"date": "2021-04-12 19:30:31.501000", "total_ask_size": 167.5376995, "total_bid_size": 16.1643577, "ask_price": 95900.0, "bid_price": 95780.0},

{"date": "2021-04-12 19:30:33.084000", "total_ask_size": 60.71683642, "total_bid_size": 1.04242676, "ask_price": 95980.0, "bid_price": 95930.0},

{"date": "2021-04-12 19:30:33.430000", "total_ask_size": 10.77746379, "total_bid_size": 3.98046957, "ask_price": 95870.0, "bid_price": 95640.0},

{"date": "2021-04-12 19:30:34.667000", "total_ask_size": 12.57556095, "total_bid_size": 99.13977356, "ask_price": 95830.0, "bid_price": 95780.0},

{"date": "2021-04-12 19:30:35.360000", "total_ask_size": 834.14295871, "total_bid_size": 54.11999489, "ask_price": 96000.0, "bid_price": 95980.0},

{"date": "2021-04-12 19:30:36.949000", "total_ask_size": 516.74247168, "total_bid_size": 63.6625396, "ask_price": 96000.0, "bid_price": 95980.0},

{"date": "2021-04-12 19:30:37.297000", "total_ask_size": 20.49094982, "total_bid_size": 63.6625396, "ask_price": 96000.0, "bid_price": 95980.0},

{"date": "2021-04-12 19:30:38.526000", "total_ask_size": 31.37480749, "total_bid_size": 16.57987919, "ask_price": 96070.0, "bid_price": 96020.0},

{"date": "2021-04-12 19:30:39.218000", "total_ask_size": 8.63694333, "total_bid_size": 270.42147717, "ask_price": 96130.0, "bid_price": 96010.0},

{"date": "2021-04-12 19:30:40.451000", "total_ask_size": 5.03664736, "total_bid_size": 17.41835869, "ask_price": 96160.0, "bid_price": 96110.0},

{"date": "2021-04-12 19:30:41.674000", "total_ask_size": 43.52838532, "total_bid_size": 201.12975328, "ask_price": 96160.0, "bid_price": 96140.0},

{"date": "2021-04-12 19:30:42.722000", "total_ask_size": 12.31638348, "total_bid_size": 381.00211069, "ask_price": 96180.0, "bid_price": 96170.0},

{"date": "2021-04-12 19:30:43.607000", "total_ask_size": 4.39624381, "total_bid_size": 379.0243612, "ask_price": 96220.0, "bid_price": 96170.0},

{"date": "2021-04-12 19:30:44.653000", "total_ask_size": 180.02717625, "total_bid_size": 48.05536494, "ask_price": 96300.0, "bid_price": 96180.0},

{"date": "2021-04-12 19:30:45.531000", "total_ask_size": 73.84024435, "total_bid_size": 3.66427604, "ask_price": 96300.0, "bid_price": 96270.0},

{"date": "2021-04-12 19:30:46.581000", "total_ask_size": 161.03126963, "total_bid_size": 37.07975594, "ask_price": 96270.0, "bid_price": 96230.0},

{"date": "2021-04-12 19:30:47.816000", "total_ask_size": 26.21035, "total_bid_size": 161.56415632, "ask_price": 96290.0, "bid_price": 96180.0},

{"date": "2021-04-12 19:30:48.513000", "total_ask_size": 375.33422094, "total_bid_size": 138.20662208, "ask_price": 96230.0, "bid_price": 96180.0},

{"date": "2021-04-12 19:30:49.742000", "total_ask_size": 121.65609869, "total_bid_size": 77.85688484, "ask_price": 96280.0, "bid_price": 96140.0},

{"date": "2021-04-12 19:30:50.438000", "total_ask_size": 11.91242313, "total_bid_size": 1062.78842976, "ask_price": 96270.0, "bid_price": 96230.0},

{"date": "2021-04-12 19:30:52.017000", "total_ask_size": 17.45726322, "total_bid_size": 1.03896103, "ask_price": 96270.0, "bid_price": 96250.0},

{"date": "2021-04-12 19:30:52.366000", "total_ask_size": 14.99615743, "total_bid_size": 2.72973953, "ask_price": 96220.0, "bid_price": 96160.0},

{"date": "2021-04-12 19:30:53.591000", "total_ask_size": 13.2322628, "total_bid_size": 331.36100777, "ask_price": 96270.0, "bid_price": 96250.0},

{"date": "2021-04-12 19:30:54.289000", "total_ask_size": 11.1982442, "total_bid_size": 265.39671585, "ask_price": 96290.0, "bid_price": 96280.0},

{"date": "2021-04-12 19:30:55.520000", "total_ask_size": 2.95575496, "total_bid_size": 2.36584376, "ask_price": 96300.0, "bid_price": 96280.0},

{"date": "2021-04-12 19:30:56.565000", "total_ask_size": 1.50827086, "total_bid_size": 9.33291792, "ask_price": 96300.0, "bid_price": 96290.0},

{"date": "2021-04-12 19:30:57.806000", "total_ask_size": 363.97695928, "total_bid_size": 39.41902507, "ask_price": 96280.0, "bid_price": 96270.0},

{"date": "2021-04-12 19:30:59.035000", "total_ask_size": 231.35009499, "total_bid_size": 58.61421046, "ask_price": 96280.0, "bid_price": 96270.0},

{"date": "2021-04-12 19:30:59.384000", "total_ask_size": 176.30790431, "total_bid_size": 56.17331901, "ask_price": 96280.0, "bid_price": 96270.0},

{"date": "2021-04-12 19:31:00.430000", "total_ask_size": 38.67080373, "total_bid_size": 52.59892033, "ask_price": 96300.0, "bid_price": 96290.0},

{"date": "2021-04-12 19:31:01.616000", "total_ask_size": 10.38025933, "total_bid_size": 33.8683447, "ask_price": 96300.0, "bid_price": 96290.0},

{"date": "2021-04-12 19:31:02.309000", "total_ask_size": 27.69880846, "total_bid_size": 230.77776066, "ask_price": 96320.0, "bid_price": 96280.0},

{"date": "2021-04-12 19:31:03.540000", "total_ask_size": 47.77724304, "total_bid_size": 203.16179632, "ask_price": 96300.0, "bid_price": 96280.0},

{"date": "2021-04-12 19:31:04.234000", "total_ask_size": 25.96228681, "total_bid_size": 77.29716606, "ask_price": 96320.0, "bid_price": 96300.0},

{"date": "2021-04-12 19:31:05.469000", "total_ask_size": 28.10278862, "total_bid_size": 603.93999275, "ask_price": 96380.0, "bid_price": 96310.0},

{"date": "2021-04-12 19:31:06.513000", "total_ask_size": 22.64084349, "total_bid_size": 13.72994575, "ask_price": 96400.0, "bid_price": 96330.0},

{"date": "2021-04-12 19:31:07.750000", "total_ask_size": 24.92705404, "total_bid_size": 44.65635218, "ask_price": 96450.0, "bid_price": 96390.0},

{"date": "2021-04-12 19:31:08.440000", "total_ask_size": 133.66083228, "total_bid_size": 39.02890757, "ask_price": 96490.0, "bid_price": 96390.0},

{"date": "2021-04-12 19:31:10.032000", "total_ask_size": 345.71228117, "total_bid_size": 1.03680663, "ask_price": 96450.0, "bid_price": 96420.0},

{"date": "2021-04-12 19:31:10.379000", "total_ask_size": 307.26718176, "total_bid_size": 9.41683052, "ask_price": 96450.0, "bid_price": 96430.0},

{"date": "2021-04-12 19:31:11.620000", "total_ask_size": 218.62936014, "total_bid_size": 25.29980442, "ask_price": 96450.0, "bid_price": 96380.0},

{"date": "2021-04-12 19:31:12.315000", "total_ask_size": 98.63473079, "total_bid_size": 2.62196186, "ask_price": 96450.0, "bid_price": 96400.0},

{"date": "2021-04-12 19:31:13.548000", "total_ask_size": 13.61977311, "total_bid_size": 153.61911035, "ask_price": 96420.0, "bid_price": 96390.0},

{"date": "2021-04-12 19:31:14.784000", "total_ask_size": 7.32230473, "total_bid_size": 1.21619801, "ask_price": 96450.0, "bid_price": 96430.0},

{"date": "2021-04-12 19:31:15.831000", "total_ask_size": 12.00032612, "total_bid_size": 1.21619801, "ask_price": 96440.0, "bid_price": 96430.0},

{"date": "2021-04-12 19:31:16.711000", "total_ask_size": 25.52886209, "total_bid_size": 10.94018298, "ask_price": 96490.0, "bid_price": 96420.0},

{"date": "2021-04-12 19:31:17.757000", "total_ask_size": 112.02551926, "total_bid_size": 107.55086874, "ask_price": 96490.0, "bid_price": 96400.0},

{"date": "2021-04-12 19:31:18.637000", "total_ask_size": 98.82784767, "total_bid_size": 84.2005925, "ask_price": 96490.0, "bid_price": 96430.0},

{"date": "2021-04-12 19:31:19.687000", "total_ask_size": 15.57335432, "total_bid_size": 1.01495451, "ask_price": 96440.0, "bid_price": 96430.0},

{"date": "2021-04-12 19:31:20.576000", "total_ask_size": 9.66354775, "total_bid_size": 60.96733501, "ask_price": 96490.0, "bid_price": 96400.0},

{"date": "2021-04-12 19:31:21.625000", "total_ask_size": 3.13097604, "total_bid_size": 24.29863061, "ask_price": 96540.0, "bid_price": 96500.0},

{"date": "2021-04-12 19:31:22.509000", "total_ask_size": 322.34350264, "total_bid_size": 8.81032175, "ask_price": 96580.0, "bid_price": 96490.0},

{"date": "2021-04-12 19:31:23.218000", "total_ask_size": 321.87691897, "total_bid_size": 2.41848207, "ask_price": 96580.0, "bid_price": 96540.0},

{"date": "2021-04-12 19:31:24.811000", "total_ask_size": 141.95569173, "total_bid_size": 41.56156314, "ask_price": 96590.0, "bid_price": 96550.0},

{"date": "2021-04-12 19:31:25.505000", "total_ask_size": 109.45836138, "total_bid_size": 84.87763332, "ask_price": 96590.0, "bid_price": 96540.0},

{"date": "2021-04-12 19:31:26.749000", "total_ask_size": 42.81082246, "total_bid_size": 264.60539645, "ask_price": 96670.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:31:27.446000", "total_ask_size": 38.94158693, "total_bid_size": 338.10732456, "ask_price": 96670.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:31:29.034000", "total_ask_size": 805.16264529, "total_bid_size": 301.06309649, "ask_price": 96800.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:31:29.383000", "total_ask_size": 803.22635398, "total_bid_size": 324.20384351, "ask_price": 96800.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:31:30.654000", "total_ask_size": 49.50264519, "total_bid_size": 107.06346285, "ask_price": 96760.0, "bid_price": 96670.0},

{"date": "2021-04-12 19:31:31.346000", "total_ask_size": 11.40374871, "total_bid_size": 494.55098085, "ask_price": 96900.0, "bid_price": 96890.0},

{"date": "2021-04-12 19:31:32.588000", "total_ask_size": 246.58215107, "total_bid_size": 285.57716457, "ask_price": 96930.0, "bid_price": 96890.0},

{"date": "2021-04-12 19:31:34.344000", "total_ask_size": 168.87065649, "total_bid_size": 2.47403697, "ask_price": 96910.0, "bid_price": 96900.0},

{"date": "2021-04-12 19:31:34.692000", "total_ask_size": 124.20499005, "total_bid_size": 212.05899105, "ask_price": 96910.0, "bid_price": 96890.0},

{"date": "2021-04-12 19:31:35.749000", "total_ask_size": 187.10710282, "total_bid_size": 26.77015994, "ask_price": 96890.0, "bid_price": 96870.0},

{"date": "2021-04-12 19:31:36.445000", "total_ask_size": 477.69351411, "total_bid_size": 103.98581407, "ask_price": 97000.0, "bid_price": 96670.0},

{"date": "2021-04-12 19:31:37.681000", "total_ask_size": 63.01333373, "total_bid_size": 16.01724671, "ask_price": 96940.0, "bid_price": 96930.0},

{"date": "2021-04-12 19:31:38.376000", "total_ask_size": 50.44444675, "total_bid_size": 13.44356438, "ask_price": 96940.0, "bid_price": 96930.0},

{"date": "2021-04-12 19:31:39.615000", "total_ask_size": 865.70556881, "total_bid_size": 7.76264095, "ask_price": 97000.0, "bid_price": 96960.0},

{"date": "2021-04-12 19:31:40.309000", "total_ask_size": 545.53610828, "total_bid_size": 95.39486931, "ask_price": 97000.0, "bid_price": 96920.0},

{"date": "2021-04-12 19:31:41.554000", "total_ask_size": 6.65422102, "total_bid_size": 177.13394432, "ask_price": 96940.0, "bid_price": 96910.0},

{"date": "2021-04-12 19:31:42.787000", "total_ask_size": 382.4628587, "total_bid_size": 595.4908105, "ask_price": 97000.0, "bid_price": 96970.0},

{"date": "2021-04-12 19:31:43.832000", "total_ask_size": 54.58933297, "total_bid_size": 543.97656874, "ask_price": 97000.0, "bid_price": 96970.0},

{"date": "2021-04-12 19:31:45.074000", "total_ask_size": 293.08867149, "total_bid_size": 1072.76653793, "ask_price": 97070.0, "bid_price": 97000.0},

{"date": "2021-04-12 19:31:45.773000", "total_ask_size": 0.08703466, "total_bid_size": 1044.41843125, "ask_price": 97010.0, "bid_price": 97000.0},

{"date": "2021-04-12 19:31:47.010000", "total_ask_size": 8.05147948, "total_bid_size": 9.7484941, "ask_price": 97090.0, "bid_price": 97080.0},

{"date": "2021-04-12 19:31:47.709000", "total_ask_size": 35.31971642, "total_bid_size": 37.09852845, "ask_price": 97190.0, "bid_price": 97020.0},

{"date": "2021-04-12 19:31:48.597000", "total_ask_size": 39.33503332, "total_bid_size": 51.54059764, "ask_price": 97100.0, "bid_price": 97080.0},

{"date": "2021-04-12 19:31:49.646000", "total_ask_size": 101.00191969, "total_bid_size": 29.31172633, "ask_price": 97090.0, "bid_price": 97080.0},

{"date": "2021-04-12 19:31:50.530000", "total_ask_size": 2.06058108, "total_bid_size": 7.32125256, "ask_price": 97150.0, "bid_price": 97130.0},

{"date": "2021-04-12 19:31:51.577000", "total_ask_size": 5.80525787, "total_bid_size": 6.57204679, "ask_price": 97210.0, "bid_price": 97120.0},

{"date": "2021-04-12 19:31:52.463000", "total_ask_size": 255.81525776, "total_bid_size": 11.1482622, "ask_price": 97390.0, "bid_price": 97130.0},

{"date": "2021-04-12 19:31:53.506000", "total_ask_size": 249.0624084, "total_bid_size": 33.92364794, "ask_price": 97390.0, "bid_price": 97220.0},

{"date": "2021-04-12 19:31:54.391000", "total_ask_size": 31.86728349, "total_bid_size": 9.13859072, "ask_price": 97440.0, "bid_price": 97390.0},

{"date": "2021-04-12 19:31:55.438000", "total_ask_size": 944.04393724, "total_bid_size": 29.28329741, "ask_price": 97400.0, "bid_price": 97390.0},

{"date": "2021-04-12 19:31:56.678000", "total_ask_size": 787.91194727, "total_bid_size": 201.72981405, "ask_price": 97400.0, "bid_price": 97240.0},

{"date": "2021-04-12 19:31:57.915000", "total_ask_size": 13.7879471, "total_bid_size": 3.11401111, "ask_price": 97320.0, "bid_price": 97300.0},

{"date": "2021-04-12 19:31:58.616000", "total_ask_size": 650.36011284, "total_bid_size": 2.85854397, "ask_price": 97220.0, "bid_price": 97210.0},

{"date": "2021-04-12 19:31:59.313000", "total_ask_size": 371.96862087, "total_bid_size": 165.31128282, "ask_price": 97220.0, "bid_price": 97140.0},

{"date": "2021-04-12 19:32:00.902000", "total_ask_size": 125.56219017, "total_bid_size": 0.99996331, "ask_price": 97140.0, "bid_price": 97130.0},

{"date": "2021-04-12 19:32:01.247000", "total_ask_size": 177.45749114, "total_bid_size": 218.25044442, "ask_price": 97140.0, "bid_price": 97130.0},

{"date": "2021-04-12 19:32:02.493000", "total_ask_size": 63.20453352, "total_bid_size": 128.98324671, "ask_price": 97140.0, "bid_price": 97130.0},

{"date": "2021-04-12 19:32:03.730000", "total_ask_size": 257.73704458, "total_bid_size": 25.17685576, "ask_price": 97100.0, "bid_price": 97090.0},

{"date": "2021-04-12 19:32:04.783000", "total_ask_size": 113.25075827, "total_bid_size": 94.7441415, "ask_price": 97100.0, "bid_price": 97080.0},

{"date": "2021-04-12 19:32:05.668000", "total_ask_size": 212.76683346, "total_bid_size": 7.21736524, "ask_price": 97100.0, "bid_price": 97090.0},

{"date": "2021-04-12 19:32:06.716000", "total_ask_size": 69.13623245, "total_bid_size": 6.76245108, "ask_price": 97070.0, "bid_price": 97060.0},

{"date": "2021-04-12 19:32:07.485000", "total_ask_size": 75.46037343, "total_bid_size": 9.34161348, "ask_price": 97160.0, "bid_price": 97120.0},

{"date": "2021-04-12 19:32:08.530000", "total_ask_size": 81.12953636, "total_bid_size": 398.60632077, "ask_price": 96930.0, "bid_price": 96910.0},

{"date": "2021-04-12 19:32:09.419000", "total_ask_size": 24.54552975, "total_bid_size": 317.6054389, "ask_price": 97060.0, "bid_price": 96910.0},

{"date": "2021-04-12 19:32:10.997000", "total_ask_size": 3.14273866, "total_bid_size": 15.34418948, "ask_price": 96930.0, "bid_price": 96890.0},

{"date": "2021-04-12 19:32:11.695000", "total_ask_size": 24.20331369, "total_bid_size": 25.20500465, "ask_price": 96880.0, "bid_price": 96870.0},

{"date": "2021-04-12 19:32:12.390000", "total_ask_size": 30.24980144, "total_bid_size": 135.54420517, "ask_price": 96950.0, "bid_price": 96900.0},

{"date": "2021-04-12 19:32:13.629000", "total_ask_size": 60.74224603, "total_bid_size": 157.59190528, "ask_price": 96880.0, "bid_price": 96510.0},

{"date": "2021-04-12 19:32:14.323000", "total_ask_size": 8.44388426, "total_bid_size": 25.93845915, "ask_price": 96530.0, "bid_price": 96510.0},

{"date": "2021-04-12 19:32:15.911000", "total_ask_size": 239.63863307, "total_bid_size": 41.59305325, "ask_price": 96310.0, "bid_price": 96230.0},

{"date": "2021-04-12 19:32:16.260000", "total_ask_size": 66.24784975, "total_bid_size": 10.36712272, "ask_price": 96310.0, "bid_price": 96230.0},

{"date": "2021-04-12 19:32:17.849000", "total_ask_size": 9.18842262, "total_bid_size": 426.7174397, "ask_price": 96320.0, "bid_price": 96110.0},

{"date": "2021-04-12 19:32:18.556000", "total_ask_size": 0.73986265, "total_bid_size": 105.96915751, "ask_price": 96290.0, "bid_price": 96230.0},

{"date": "2021-04-12 19:32:19.600000", "total_ask_size": 10.28374573, "total_bid_size": 13.75243101, "ask_price": 96510.0, "bid_price": 96320.0},

{"date": "2021-04-12 19:32:20.350000", "total_ask_size": 4.70050596, "total_bid_size": 18.57552237, "ask_price": 96500.0, "bid_price": 96320.0},

{"date": "2021-04-12 19:32:21.399000", "total_ask_size": 6.15285774, "total_bid_size": 75.12915501, "ask_price": 96400.0, "bid_price": 96390.0},

{"date": "2021-04-12 19:32:22.645000", "total_ask_size": 30.69547082, "total_bid_size": 2.07318337, "ask_price": 96510.0, "bid_price": 96470.0},

{"date": "2021-04-12 19:32:23.921000", "total_ask_size": 16.53400458, "total_bid_size": 334.9669463, "ask_price": 96650.0, "bid_price": 96480.0},

{"date": "2021-04-12 19:32:24.625000", "total_ask_size": 0.97574025, "total_bid_size": 339.52549041, "ask_price": 96820.0, "bid_price": 96480.0},

{"date": "2021-04-12 19:32:25.862000", "total_ask_size": 137.05240777, "total_bid_size": 56.61367141, "ask_price": 96650.0, "bid_price": 96550.0},

{"date": "2021-04-12 19:32:26.906000", "total_ask_size": 1.03348492, "total_bid_size": 17.29402659, "ask_price": 96760.0, "bid_price": 96700.0},

{"date": "2021-04-12 19:32:27.794000", "total_ask_size": 13.76156011, "total_bid_size": 56.52098522, "ask_price": 96590.0, "bid_price": 96550.0},

{"date": "2021-04-12 19:32:28.841000", "total_ask_size": 3.74807853, "total_bid_size": 4.61047223, "ask_price": 96740.0, "bid_price": 96680.0},

{"date": "2021-04-12 19:32:29.722000", "total_ask_size": 72.03527747, "total_bid_size": 259.24827101, "ask_price": 96660.0, "bid_price": 96480.0},

{"date": "2021-04-12 19:32:30.775000", "total_ask_size": 78.33961253, "total_bid_size": 173.12105995, "ask_price": 96800.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:32.009000", "total_ask_size": 11.83297115, "total_bid_size": 54.64032396, "ask_price": 96700.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:32.356000", "total_ask_size": 29.37179549, "total_bid_size": 35.59869774, "ask_price": 96800.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:33.603000", "total_ask_size": 11.13455486, "total_bid_size": 10.38421599, "ask_price": 96800.0, "bid_price": 96740.0},

{"date": "2021-04-12 19:32:34.647000", "total_ask_size": 50.61878107, "total_bid_size": 29.39516885, "ask_price": 96820.0, "bid_price": 96800.0},

{"date": "2021-04-12 19:32:35.530000", "total_ask_size": 235.70039683, "total_bid_size": 61.2477866, "ask_price": 96790.0, "bid_price": 96760.0},

{"date": "2021-04-12 19:32:37.112000", "total_ask_size": 41.63347088, "total_bid_size": 0.43332111, "ask_price": 96700.0, "bid_price": 96540.0},

{"date": "2021-04-12 19:32:37.811000", "total_ask_size": 102.92501332, "total_bid_size": 4.08844232, "ask_price": 96690.0, "bid_price": 96600.0},

{"date": "2021-04-12 19:32:39.044000", "total_ask_size": 5.08769746, "total_bid_size": 7.21750649, "ask_price": 96740.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:39.396000", "total_ask_size": 72.3398526, "total_bid_size": 22.65204871, "ask_price": 96650.0, "bid_price": 96600.0},

{"date": "2021-04-12 19:32:40.438000", "total_ask_size": 0.10065562, "total_bid_size": 4.94435209, "ask_price": 96650.0, "bid_price": 96560.0},

{"date": "2021-04-12 19:32:41.681000", "total_ask_size": 27.2121114, "total_bid_size": 6.86925523, "ask_price": 96700.0, "bid_price": 96650.0},

{"date": "2021-04-12 19:32:42.371000", "total_ask_size": 11.34393223, "total_bid_size": 45.03533459, "ask_price": 96690.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:43.612000", "total_ask_size": 9.96512207, "total_bid_size": 278.50404984, "ask_price": 96670.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:44.305000", "total_ask_size": 48.69339233, "total_bid_size": 254.76724339, "ask_price": 96690.0, "bid_price": 96660.0},

{"date": "2021-04-12 19:32:45.544000", "total_ask_size": 1.93619863, "total_bid_size": 14.91637053, "ask_price": 96740.0, "bid_price": 96690.0},

{"date": "2021-04-12 19:32:46.236000", "total_ask_size": 47.5032169, "total_bid_size": 32.97081085, "ask_price": 96700.0, "bid_price": 96690.0},

{"date": "2021-04-12 19:32:47.476000", "total_ask_size": 430.32042032, "total_bid_size": 2.57663658, "ask_price": 96790.0, "bid_price": 96670.0},

{"date": "2021-04-12 19:32:48.530000", "total_ask_size": 138.49486686, "total_bid_size": 9.82352246, "ask_price": 96790.0, "bid_price": 96740.0},

{"date": "2021-04-12 19:32:49.228000", "total_ask_size": 37.90675049, "total_bid_size": 42.11130831, "ask_price": 96800.0, "bid_price": 96790.0},

{"date": "2021-04-12 19:32:50.815000", "total_ask_size": 29.15860306, "total_bid_size": 57.06992148, "ask_price": 96880.0, "bid_price": 96850.0},

{"date": "2021-04-12 19:32:51.163000", "total_ask_size": 14.916693, "total_bid_size": 39.04670569, "ask_price": 96890.0, "bid_price": 96850.0},

{"date": "2021-04-12 19:32:52.745000", "total_ask_size": 3.52487586, "total_bid_size": 51.6826543, "ask_price": 96880.0, "bid_price": 96850.0},

{"date": "2021-04-12 19:32:53.436000", "total_ask_size": 20.3670315, "total_bid_size": 200.14644264, "ask_price": 96940.0, "bid_price": 96840.0},

{"date": "2021-04-12 19:32:54.667000", "total_ask_size": 287.90435672, "total_bid_size": 28.91581509, "ask_price": 97000.0, "bid_price": 96960.0},

{"date": "2021-04-12 19:32:55.900000", "total_ask_size": 35.68346983, "total_bid_size": 2128.43801307, "ask_price": 97110.0, "bid_price": 97090.0},

{"date": "2021-04-12 19:32:56.606000", "total_ask_size": 10.65458509, "total_bid_size": 2128.43801307, "ask_price": 97110.0, "bid_price": 97090.0},

{"date": "2021-04-12 19:32:57.837000", "total_ask_size": 269.45142053, "total_bid_size": 65.10829125, "ask_price": 97180.0, "bid_price": 97110.0},

{"date": "2021-04-12 19:32:58.540000", "total_ask_size": 78.6517648, "total_bid_size": 235.3673266, "ask_price": 97170.0, "bid_price": 97110.0},

{"date": "2021-04-12 19:32:59.767000", "total_ask_size": 185.38820423, "total_bid_size": 38.57958235, "ask_price": 97180.0, "bid_price": 97170.0},

{"date": "2021-04-12 19:33:00.820000", "total_ask_size": 117.32003116, "total_bid_size": 71.42715113, "ask_price": 97180.0, "bid_price": 97170.0},

{"date": "2021-04-12 19:33:01.700000", "total_ask_size": 9.08941608, "total_bid_size": 1.43543685, "ask_price": 97170.0, "bid_price": 97110.0},

{"date": "2021-04-12 19:33:02.751000", "total_ask_size": 50.76854029, "total_bid_size": 433.8202848, "ask_price": 97300.0, "bid_price": 97200.0},

{"date": "2021-04-12 19:33:03.975000", "total_ask_size": 38.14676795, "total_bid_size": 205.07905375, "ask_price": 97390.0, "bid_price": 97300.0},

{"date": "2021-04-12 19:33:04.677000", "total_ask_size": 12.55121265, "total_bid_size": 2.79602313, "ask_price": 97390.0, "bid_price": 97330.0},

{"date": "2021-04-12 19:33:05.556000", "total_ask_size": 302.07595872, "total_bid_size": 209.14693247, "ask_price": 97310.0, "bid_price": 97300.0},

{"date": "2021-04-12 19:33:06.610000", "total_ask_size": 115.94034122, "total_bid_size": 56.54454971, "ask_price": 97420.0, "bid_price": 97410.0},

{"date": "2021-04-12 19:33:07.496000", "total_ask_size": 40.38445351, "total_bid_size": 20.86793046, "ask_price": 97460.0, "bid_price": 97410.0},

{"date": "2021-04-12 19:33:08.886000", "total_ask_size": 25.701837, "total_bid_size": 107.44318489, "ask_price": 97440.0, "bid_price": 97420.0},

{"date": "2021-04-12 19:33:09.424000", "total_ask_size": 4.6142671, "total_bid_size": 98.80150041, "ask_price": 97440.0, "bid_price": 97430.0},

{"date": "2021-04-12 19:33:10.481000", "total_ask_size": 170.51392822, "total_bid_size": 11.25748798, "ask_price": 97470.0, "bid_price": 97450.0},

{"date": "2021-04-12 19:33:11.372000", "total_ask_size": 73.9156447, "total_bid_size": 13.11490049, "ask_price": 97500.0, "bid_price": 97480.0},

{"date": "2021-04-12 19:33:12.423000", "total_ask_size": 38.66107406, "total_bid_size": 0.32176414, "ask_price": 97560.0, "bid_price": 97480.0},

{"date": "2021-04-12 19:33:13.660000", "total_ask_size": 394.64651084, "total_bid_size": 8.8964234, "ask_price": 97650.0, "bid_price": 97520.0},

{"date": "2021-04-12 19:33:14.706000", "total_ask_size": 38.56988039, "total_bid_size": 8.80947524, "ask_price": 97590.0, "bid_price": 97570.0},

{"date": "2021-04-12 19:33:15.769000", "total_ask_size": 3.98572228, "total_bid_size": 580.89114843, "ask_price": 97750.0, "bid_price": 97660.0},

{"date": "2021-04-12 19:33:16.657000", "total_ask_size": 172.94908031, "total_bid_size": 578.94549468, "ask_price": 97890.0, "bid_price": 97660.0},

{"date": "2021-04-12 19:33:17.706000", "total_ask_size": 1.95813483, "total_bid_size": 51.36606543, "ask_price": 97990.0, "bid_price": 97800.0},

{"date": "2021-04-12 19:33:18.592000", "total_ask_size": 231.38005566, "total_bid_size": 37.81050811, "ask_price": 97890.0, "bid_price": 97800.0},

{"date": "2021-04-12 19:33:19.297000", "total_ask_size": 82.97540543, "total_bid_size": 59.81769997, "ask_price": 97890.0, "bid_price": 97860.0},

{"date": "2021-04-12 19:33:20.543000", "total_ask_size": 72.97995315, "total_bid_size": 12.04516376, "ask_price": 97950.0, "bid_price": 97890.0},

{"date": "2021-04-12 19:33:21.593000", "total_ask_size": 779.98642451, "total_bid_size": 52.95298924, "ask_price": 98000.0, "bid_price": 97890.0},

{"date": "2021-04-12 19:33:22.488000", "total_ask_size": 63.35820411, "total_bid_size": 275.615806, "ask_price": 97920.0, "bid_price": 97890.0},

{"date": "2021-04-12 19:33:23.540000", "total_ask_size": 212.46352661, "total_bid_size": 1.02082482, "ask_price": 98000.0, "bid_price": 97960.0},

{"date": "2021-04-12 19:33:24.785000", "total_ask_size": 9.25311915, "total_bid_size": 91.7375533, "ask_price": 98050.0, "bid_price": 98030.0},

{"date": "2021-04-12 19:33:25.479000", "total_ask_size": 61.86912981, "total_bid_size": 4.87237505, "ask_price": 98060.0, "bid_price": 98030.0},

{"date": "2021-04-12 19:33:26.732000", "total_ask_size": 1.47768235, "total_bid_size": 11.08107049, "ask_price": 98280.0, "bid_price": 98050.0},

{"date": "2021-04-12 19:33:27.973000", "total_ask_size": 111.73141874, "total_bid_size": 62.87952328, "ask_price": 98670.0, "bid_price": 98080.0},

{"date": "2021-04-12 19:33:28.677000", "total_ask_size": 87.05626554, "total_bid_size": 40.81478929, "ask_price": 98850.0, "bid_price": 98280.0},

{"date": "2021-04-12 19:33:29.914000", "total_ask_size": 93.27575238, "total_bid_size": 27.77306202, "ask_price": 98900.0, "bid_price": 98470.0},

{"date": "2021-04-12 19:33:30.658000", "total_ask_size": 2.4080581, "total_bid_size": 26.90361644, "ask_price": 98900.0, "bid_price": 98470.0},

{"date": "2021-04-12 19:33:31.550000", "total_ask_size": 4.64207754, "total_bid_size": 19.65009261, "ask_price": 98930.0, "bid_price": 98900.0},

{"date": "2021-04-12 19:33:32.590000", "total_ask_size": 377.40124207, "total_bid_size": 9.18370546, "ask_price": 99000.0, "bid_price": 98900.0},

{"date": "2021-04-12 19:33:33.838000", "total_ask_size": 119.56388774, "total_bid_size": 36.81116905, "ask_price": 98900.0, "bid_price": 98880.0},

{"date": "2021-04-12 19:33:34.532000", "total_ask_size": 1.94676776, "total_bid_size": 12.45233926, "ask_price": 98950.0, "bid_price": 98930.0},

{"date": "2021-04-12 19:33:35.779000", "total_ask_size": 476.49158569, "total_bid_size": 59.18078689, "ask_price": 98990.0, "bid_price": 98940.0},

{"date": "2021-04-12 19:33:36.667000", "total_ask_size": 198.47362809, "total_bid_size": 22.580304, "ask_price": 98990.0, "bid_price": 98950.0},

{"date": "2021-04-12 19:33:37.719000", "total_ask_size": 2.42226045, "total_bid_size": 353.99265697, "ask_price": 98930.0, "bid_price": 98900.0},

{"date": "2021-04-12 19:33:38.609000", "total_ask_size": 113.74608936, "total_bid_size": 4.83683486, "ask_price": 99300.0, "bid_price": 99100.0},

{"date": "2021-04-12 19:33:39.651000", "total_ask_size": 129.59385283, "total_bid_size": 14.2266564, "ask_price": 99000.0, "bid_price": 98990.0},

{"date": "2021-04-12 19:33:40.894000", "total_ask_size": 78.79278713, "total_bid_size": 101.21809699, "ask_price": 99070.0, "bid_price": 99000.0},

{"date": "2021-04-12 19:33:41.588000", "total_ask_size": 158.92051998, "total_bid_size": 31.8523676, "ask_price": 98950.0, "bid_price": 98930.0},

{"date": "2021-04-12 19:33:42.835000", "total_ask_size": 285.37242478, "total_bid_size": 21.76255905, "ask_price": 99090.0, "bid_price": 99060.0},

{"date": "2021-04-12 19:33:43.533000", "total_ask_size": 337.40510868, "total_bid_size": 97.91745156, "ask_price": 99070.0, "bid_price": 98990.0},

{"date": "2021-04-12 19:33:44.771000", "total_ask_size": 3297.60738448, "total_bid_size": 58.29718347, "ask_price": 98650.0, "bid_price": 98470.0},

{"date": "2021-04-12 19:33:45.655000", "total_ask_size": 2756.46170284, "total_bid_size": 7.88811109, "ask_price": 98650.0, "bid_price": 98080.0},

{"date": "2021-04-12 19:33:46.701000", "total_ask_size": 1916.95423537, "total_bid_size": 169.15688792, "ask_price": 98650.0, "bid_price": 98010.0},

{"date": "2021-04-12 19:33:47.586000", "total_ask_size": 25.88838982, "total_bid_size": 96.1767052, "ask_price": 98400.0, "bid_price": 98090.0},

{"date": "2021-04-12 19:33:49.169000", "total_ask_size": 71.94317144, "total_bid_size": 31.78506257, "ask_price": 98090.0, "bid_price": 98050.0},

{"date": "2021-04-12 19:33:49.521000", "total_ask_size": 57.59344646, "total_bid_size": 879.63031362, "ask_price": 98090.0, "bid_price": 98040.0},

{"date": "2021-04-12 19:33:50.568000", "total_ask_size": 4.08621922, "total_bid_size": 52.45224875, "ask_price": 98290.0, "bid_price": 98180.0},

{"date": "2021-04-12 19:33:51.812000", "total_ask_size": 46.16461904, "total_bid_size": 73.38211028, "ask_price": 98440.0, "bid_price": 98400.0},

{"date": "2021-04-12 19:33:52.504000", "total_ask_size": 24.50518695, "total_bid_size": 89.8798857, "ask_price": 98440.0, "bid_price": 98400.0},

{"date": "2021-04-12 19:33:53.742000", "total_ask_size": 56.09232074, "total_bid_size": 217.37056938, "ask_price": 98310.0, "bid_price": 98140.0},

{"date": "2021-04-12 19:33:54.431000", "total_ask_size": 32.72566947, "total_bid_size": 30.78987661, "ask_price": 98260.0, "bid_price": 98160.0},

{"date": "2021-04-12 19:33:55.665000", "total_ask_size": 1.32752811, "total_bid_size": 217.37056938, "ask_price": 98420.0, "bid_price": 98140.0},

{"date": "2021-04-12 19:33:56.358000", "total_ask_size": 1150.37345459, "total_bid_size": 1018.81982228, "ask_price": 98650.0, "bid_price": 98470.0},

{"date": "2021-04-12 19:33:57.597000", "total_ask_size": 531.92380917, "total_bid_size": 793.73880871, "ask_price": 98590.0, "bid_price": 98470.0},

{"date": "2021-04-12 19:33:58.745000", "total_ask_size": 208.73272207, "total_bid_size": 552.40770057, "ask_price": 98590.0, "bid_price": 98470.0},

{"date": "2021-04-12 19:33:59.792000", "total_ask_size": 119.8282525, "total_bid_size": 10.30906265, "ask_price": 98470.0, "bid_price": 98400.0},

{"date": "2021-04-12 19:34:00.499000", "total_ask_size": 73.75307478, "total_bid_size": 47.02061363, "ask_price": 98470.0, "bid_price": 98440.0},

{"date": "2021-04-12 19:34:01.548000", "total_ask_size": 145.75554619, "total_bid_size": 11.91706147, "ask_price": 98400.0, "bid_price": 98260.0},

{"date": "2021-04-12 19:34:02.788000", "total_ask_size": 337.41883736, "total_bid_size": 42.60980571, "ask_price": 98470.0, "bid_price": 98420.0},

{"date": "2021-04-12 19:34:03.482000", "total_ask_size": 337.59124852, "total_bid_size": 0.63353427, "ask_price": 98470.0, "bid_price": 98400.0},

{"date": "2021-04-12 19:34:04.730000", "total_ask_size": 7.9868462, "total_bid_size": 78.93599782, "ask_price": 98260.0, "bid_price": 98150.0},

{"date": "2021-04-12 19:34:05.956000", "total_ask_size": 5.98830944, "total_bid_size": 0.59108213, "ask_price": 98260.0, "bid_price": 98070.0},

{"date": "2021-04-12 19:34:06.659000", "total_ask_size": 30.84320774, "total_bid_size": 12.30687974, "ask_price": 98130.0, "bid_price": 98040.0},

{"date": "2021-04-12 19:34:07.543000", "total_ask_size": 126.53374827, "total_bid_size": 34.93434998, "ask_price": 98260.0, "bid_price": 98230.0},

{"date": "2021-04-12 19:34:08.593000", "total_ask_size": 4.98361899, "total_bid_size": 3.12323689, "ask_price": 98130.0, "bid_price": 98060.0},

{"date": "2021-04-12 19:34:09.472000", "total_ask_size": 117.05723836, "total_bid_size": 202.20152243, "ask_price": 98090.0, "bid_price": 98000.0},

{"date": "2021-04-12 19:34:10.525000", "total_ask_size": 1.74958509, "total_bid_size": 80.05338895, "ask_price": 98060.0, "bid_price": 98000.0},

{"date": "2021-04-12 19:34:11.417000", "total_ask_size": 1083.827438, "total_bid_size": 64.58917329, "ask_price": 97960.0, "bid_price": 97850.0},

{"date": "2021-04-12 19:34:12.465000", "total_ask_size": 1006.37508238, "total_bid_size": 0.82055707, "ask_price": 97960.0, "bid_price": 97720.0},

{"date": "2021-04-12 19:34:13.623000", "total_ask_size": 6.6700832, "total_bid_size": 130.3163445, "ask_price": 97850.0, "bid_price": 97500.0},

{"date": "2021-04-12 19:34:14.845000", "total_ask_size": 4.12218301, "total_bid_size": 28.01010669, "ask_price": 97500.0, "bid_price": 97400.0},

{"date": "2021-04-12 19:34:15.545000", "total_ask_size": 4.44491713, "total_bid_size": 96.18893763, "ask_price": 97630.0, "bid_price": 97510.0},

{"date": "2021-04-12 19:34:16.778000", "total_ask_size": 6.82379848, "total_bid_size": 1366.76145003, "ask_price": 97890.0, "bid_price": 97590.0},

{"date": "2021-04-12 19:34:17.481000", "total_ask_size": 26.98385508, "total_bid_size": 1229.12991009, "ask_price": 97600.0, "bid_price": 97590.0},

{"date": "2021-04-12 19:34:18.716000", "total_ask_size": 1.98885454, "total_bid_size": 1095.49605044, "ask_price": 97630.0, "bid_price": 97600.0},

{"date": "2021-04-12 19:34:19.768000", "total_ask_size": 772.45473089, "total_bid_size": 418.04251456, "ask_price": 97960.0, "bid_price": 97890.0},

{"date": "2021-04-12 19:34:20.650000", "total_ask_size": 672.97384805, "total_bid_size": 88.90942684, "ask_price": 97960.0, "bid_price": 97770.0},

{"date": "2021-04-12 19:34:21.702000", "total_ask_size": 10.1816745, "total_bid_size": 168.4631073, "ask_price": 97890.0, "bid_price": 97780.0},

{"date": "2021-04-12 19:34:22.938000", "total_ask_size": 337.58842109, "total_bid_size": 260.10238609, "ask_price": 97960.0, "bid_price": 97850.0},

{"date": "2021-04-12 19:34:23.351000", "total_ask_size": 291.33302652, "total_bid_size": 56.36503373, "ask_price": 97960.0, "bid_price": 97890.0},

{"date": "2021-04-12 19:34:24.936000", "total_ask_size": 1.23359564, "total_bid_size": 30.79300488, "ask_price": 97980.0, "bid_price": 97960.0},

{"date": "2021-04-12 19:34:25.282000", "total_ask_size": 297.90256318, "total_bid_size": 64.81322651, "ask_price": 98000.0, "bid_price": 97960.0},

{"date": "2021-04-12 19:34:26.459000", "total_ask_size": 89.0443744, "total_bid_size": 135.97948366, "ask_price": 97960.0, "bid_price": 97890.0},

{"date": "2021-04-12 19:34:28.041000", "total_ask_size": 200.60058869, "total_bid_size": 63.38197319, "ask_price": 98030.0, "bid_price": 98000.0},

{"date": "2021-04-12 19:34:28.737000", "total_ask_size": 165.87512711, "total_bid_size": 95.45813778, "ask_price": 98030.0, "bid_price": 98000.0},

{"date": "2021-04-12 19:34:29.616000", "total_ask_size": 54.18699841, "total_bid_size": 59.7551209, "ask_price": 98000.0, "bid_price": 97990.0},

{"date": "2021-04-12 19:34:30.664000", "total_ask_size": 25.95277879, "total_bid_size": 16.32730476, "ask_price": 98000.0, "bid_price": 97990.0},

{"date": "2021-04-12 19:34:31.543000", "total_ask_size": 418.50652658, "total_bid_size": 73.73340925, "ask_price": 97960.0, "bid_price": 97850.0},

{"date": "2021-04-12 19:34:32.590000", "total_ask_size": 52.66667736, "total_bid_size": 365.18865248, "ask_price": 97900.0, "bid_price": 97850.0},

{"date": "2021-04-12 19:34:33.826000", "total_ask_size": 650.41930521, "total_bid_size": 6.54772654, "ask_price": 97840.0, "bid_price": 97830.0},

{"date": "2021-04-12 19:34:34.523000", "total_ask_size": 604.33407464, "total_bid_size": 1.77733344, "ask_price": 97840.0, "bid_price": 97720.0},

{"date": "2021-04-12 19:34:35.411000", "total_ask_size": 559.68356876, "total_bid_size": 44.24499028, "ask_price": 97840.0, "bid_price": 97810.0},

{"date": "2021-04-12 19:34:36.648000", "total_ask_size": 20.33594341, "total_bid_size": 15.18448554, "ask_price": 97770.0, "bid_price": 97700.0},

{"date": "2021-04-12 19:34:37.698000", "total_ask_size": 19.13573458, "total_bid_size": 3.90705373, "ask_price": 97820.0, "bid_price": 97810.0},

{"date": "2021-04-12 19:34:38.579000", "total_ask_size": 50.31729437, "total_bid_size": 68.19078443, "ask_price": 97810.0, "bid_price": 97630.0},

{"date": "2021-04-12 19:34:39.626000", "total_ask_size": 87.12122638, "total_bid_size": 47.12768201, "ask_price": 97810.0, "bid_price": 97640.0},

{"date": "2021-04-12 19:34:40.880000", "total_ask_size": 148.99392757, "total_bid_size": 52.88692287, "ask_price": 97620.0, "bid_price": 97600.0},

{"date": "2021-04-12 19:34:41.579000", "total_ask_size": 7.6146487, "total_bid_size": 10.82529052, "ask_price": 97590.0, "bid_price": 97580.0},

{"date": "2021-04-12 19:34:42.811000", "total_ask_size": 2.01832774, "total_bid_size": 30.99198639, "ask_price": 97580.0, "bid_price": 97470.0},

{"date": "2021-04-12 19:34:43.510000", "total_ask_size": 169.08015648, "total_bid_size": 33.61493858, "ask_price": 97810.0, "bid_price": 97620.0},

{"date": "2021-04-12 19:34:44.686000", "total_ask_size": 11.66430974, "total_bid_size": 576.02375452, "ask_price": 97710.0, "bid_price": 97440.0},]

