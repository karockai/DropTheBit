import json
# 19:17 ~ 19:23

juka_list = [
    
{"date": "2021-04-12 19:17:01.216000", "open": 94590.0, "close": 94560.0, "low": 94560.0, "high": 94650.0, "volume": 1.0575296096503735, "split": "", "dividend": "", "curPrice": 94560.0, "prePrice": 94600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:02.483000", "open": 94560.0, "close": 94600.0, "low": 94550.0, "high": 94670.0, "volume": 0.738786268979311, "split": "", "dividend": "", "curPrice": 94600.0, "prePrice": 94560.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:03.052000", "open": 94550.0, "close": 94590.0, "low": 94510.0, "high": 94600.0, "volume": 4.878113459795713, "split": "", "dividend": "", "curPrice": 94590.0, "prePrice": 94600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:04.086000", "open": 94560.0, "close": 94520.0, "low": 94510.0, "high": 94600.0, "volume": 0.05609999969601631, "split": "", "dividend": "", "curPrice": 94520.0, "prePrice": 94590.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:05.080000", "open": 94510.0, "close": 94510.0, "low": 94510.0, "high": 94510.0, "volume": 4.358777118846774, "split": "", "dividend": "", "curPrice": 94510.0, "prePrice": 94520.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:06.015000", "open": 94510.0, "close": 94450.0, "low": 94450.0, "high": 94510.0, "volume": 0.7498585600405931, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94510.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:07.235000", "open": 94450.0, "close": 94450.0, "low": 94410.0, "high": 94500.0, "volume": 0.09521794132888317, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:08.020000", "open": 94450.0, "close": 94350.0, "low": 94350.0, "high": 94450.0, "volume": 21.520547160878778, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:09.197000", "open": 94360.0, "close": 94370.0, "low": 94350.0, "high": 94430.0, "volume": 5.463991170749068, "split": "", "dividend": "", "curPrice": 94370.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:10.129000", "open": 94370.0, "close": 94300.0, "low": 94300.0, "high": 94370.0, "volume": 10.71299402974546, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:11.168000", "open": 94300.0, "close": 94350.0, "low": 94300.0, "high": 94370.0, "volume": 2.2659224309027195, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:12.036000", "open": 94300.0, "close": 94210.0, "low": 94210.0, "high": 94350.0, "volume": 0.047120410948991776, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:13.016000", "open": 94300.0, "close": 94260.0, "low": 94210.0, "high": 94300.0, "volume": 3.741183949634433, "split": "", "dividend": "", "curPrice": 94260.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:14.047000", "open": 94280.0, "close": 94220.0, "low": 94220.0, "high": 94280.0, "volume": 31.13653413951397, "split": "", "dividend": "", "curPrice": 94220.0, "prePrice": 94260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:15.043000", "open": 94240.0, "close": 94200.0, "low": 94200.0, "high": 94240.0, "volume": 6.797740140929818, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:16.027000", "open": 94190.0, "close": 94190.0, "low": 94100.0, "high": 94220.0, "volume": 1.473906809464097, "split": "", "dividend": "", "curPrice": 94190.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:17.026000", "open": 94180.0, "close": 94070.0, "low": 94070.0, "high": 94190.0, "volume": 5.4122413489967585, "split": "", "dividend": "", "curPrice": 94070.0, "prePrice": 94190.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:18.048000", "open": 94100.0, "close": 94050.0, "low": 94030.0, "high": 94100.0, "volume": 46.14969071932137, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94070.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:19.017000", "open": 94050.0, "close": 94050.0, "low": 94030.0, "high": 94060.0, "volume": 112.03370217978954, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:20.013000", "open": 94050.0, "close": 94050.0, "low": 94000.0, "high": 94060.0, "volume": 18.47661405056715, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:21.001000", "open": 94050.0, "close": 94050.0, "low": 94000.0, "high": 94050.0, "volume": 0.2122691497206688, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:22.024000", "open": 94000.0, "close": 94050.0, "low": 93990.0, "high": 94050.0, "volume": 10.632642209529877, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:23.003000", "open": 94020.0, "close": 93990.0, "low": 93940.0, "high": 94050.0, "volume": 1.1053961403667927, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:24.075000", "open": 94020.0, "close": 94000.0, "low": 93930.0, "high": 94030.0, "volume": 1.8223573509603739, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:25.017000", "open": 94000.0, "close": 93990.0, "low": 93990.0, "high": 94020.0, "volume": 5.402701839804649, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:26.146000", "open": 94000.0, "close": 93990.0, "low": 93990.0, "high": 94000.0, "volume": 31.538118720054626, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:27.079000", "open": 93990.0, "close": 94000.0, "low": 93990.0, "high": 94000.0, "volume": 51.83495748974383, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:28.039000", "open": 94000.0, "close": 94060.0, "low": 93990.0, "high": 94060.0, "volume": 13.094384860247374, "split": "", "dividend": "", "curPrice": 94060.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:29.004000", "open": 94150.0, "close": 94100.0, "low": 94000.0, "high": 94220.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:30.039000", "open": 94220.0, "close": 94210.0, "low": 94060.0, "high": 94280.0, "volume": 0.6546759102493525, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:31.023000", "open": 94210.0, "close": 94280.0, "low": 94060.0, "high": 94300.0, "volume": 28.459330091252923, "split": "", "dividend": "", "curPrice": 94280.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:32.255000", "open": 94260.0, "close": 94300.0, "low": 94260.0, "high": 94300.0, "volume": 1.5973806902766228, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94280.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:33.055000", "open": 94280.0, "close": 94300.0, "low": 94280.0, "high": 94300.0, "volume": 0.3180324286222458, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:34.026000", "open": 94280.0, "close": 94300.0, "low": 94280.0, "high": 94300.0, "volume": 6.221717920154333, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:35.134000", "open": 94300.0, "close": 94300.0, "low": 94300.0, "high": 94350.0, "volume": 0.5, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:36.216000", "open": 94380.0, "close": 94350.0, "low": 94300.0, "high": 94380.0, "volume": 13.412262670695782, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:37.007000", "open": 94300.0, "close": 94340.0, "low": 94300.0, "high": 94350.0, "volume": 11.434618551284075, "split": "", "dividend": "", "curPrice": 94340.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:38.124000", "open": 94350.0, "close": 94350.0, "low": 94300.0, "high": 94400.0, "volume": 7.963152779266238, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94340.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:39.129000", "open": 94350.0, "close": 94350.0, "low": 94300.0, "high": 94380.0, "volume": 0.2670775484293699, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:40.254000", "open": 94370.0, "close": 94380.0, "low": 94350.0, "high": 94380.0, "volume": 21.446977781131864, "split": "", "dividend": "", "curPrice": 94380.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:41.309000", "open": 94350.0, "close": 94400.0, "low": 94350.0, "high": 94410.0, "volume": 23.135438548400998, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:42.248000", "open": 94400.0, "close": 94410.0, "low": 94400.0, "high": 94430.0, "volume": 0.12130715884268284, "split": "", "dividend": "", "curPrice": 94410.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:43", "open": 94410.0, "close": 94430.0, "low": 94410.0, "high": 94450.0, "volume": 9.582529779523611, "split": "", "dividend": "", "curPrice": 94430.0, "prePrice": 94410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:44.044000", "open": 94430.0, "close": 94490.0, "low": 94430.0, "high": 94500.0, "volume": 1.8006773199886084, "split": "", "dividend": "", "curPrice": 94490.0, "prePrice": 94430.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:45.147000", "open": 94450.0, "close": 94450.0, "low": 94450.0, "high": 94500.0, "volume": 6.357587721198797, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:46.051000", "open": 94450.0, "close": 94450.0, "low": 94450.0, "high": 94500.0, "volume": 0.9900943506509066, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:47.069000", "open": 94480.0, "close": 94450.0, "low": 94410.0, "high": 94490.0, "volume": 17.412408869713545, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:48.030000", "open": 94450.0, "close": 94470.0, "low": 94410.0, "high": 94470.0, "volume": 21.217324579134583, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:49.353000", "open": 94450.0, "close": 94340.0, "low": 94340.0, "high": 94470.0, "volume": 23.82492350973189, "split": "", "dividend": "", "curPrice": 94340.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:50.036000", "open": 94350.0, "close": 94300.0, "low": 94300.0, "high": 94380.0, "volume": 0.5356468688696623, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94340.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:51.068000", "open": 94280.0, "close": 94220.0, "low": 94220.0, "high": 94340.0, "volume": 43.05821530148387, "split": "", "dividend": "", "curPrice": 94220.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:52.275000", "open": 94270.0, "close": 94120.0, "low": 94120.0, "high": 94290.0, "volume": 0.5312367100268602, "split": "", "dividend": "", "curPrice": 94120.0, "prePrice": 94220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:53.235000", "open": 94210.0, "close": 94170.0, "low": 94110.0, "high": 94210.0, "volume": 2.3003493901342154, "split": "", "dividend": "", "curPrice": 94170.0, "prePrice": 94120.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:54.194000", "open": 94110.0, "close": 94100.0, "low": 94100.0, "high": 94170.0, "volume": 5.58108744956553, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:55.047000", "open": 94100.0, "close": 94060.0, "low": 94060.0, "high": 94170.0, "volume": 0.6882693506777287, "split": "", "dividend": "", "curPrice": 94060.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:56.068000", "open": 94080.0, "close": 94110.0, "low": 94060.0, "high": 94110.0, "volume": 0.5568615701049566, "split": "", "dividend": "", "curPrice": 94110.0, "prePrice": 94060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:57.110000", "open": 94100.0, "close": 94110.0, "low": 94080.0, "high": 94210.0, "volume": 31.27587149105966, "split": "", "dividend": "", "curPrice": 94110.0, "prePrice": 94110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:58.087000", "open": 94110.0, "close": 94060.0, "low": 94050.0, "high": 94110.0, "volume": 17.011361241340637, "split": "", "dividend": "", "curPrice": 94060.0, "prePrice": 94110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:17:59.012000", "open": 94100.0, "close": 94030.0, "low": 94030.0, "high": 94100.0, "volume": 59.03415055014193, "split": "", "dividend": "", "curPrice": 94030.0, "prePrice": 94060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:00.222000", "open": 94080.0, "close": 94030.0, "low": 94030.0, "high": 94100.0, "volume": 5.2524731904268265, "split": "", "dividend": "", "curPrice": 94030.0, "prePrice": 94030.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:01.087000", "open": 94020.0, "close": 94170.0, "low": 94000.0, "high": 94170.0, "volume": 10.251353930681944, "split": "", "dividend": "", "curPrice": 94170.0, "prePrice": 94030.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:02.264000", "open": 94170.0, "close": 94110.0, "low": 94110.0, "high": 94210.0, "volume": 0.7325379103422165, "split": "", "dividend": "", "curPrice": 94110.0, "prePrice": 94170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:03.161000", "open": 94110.0, "close": 94290.0, "low": 93990.0, "high": 94290.0, "volume": 10.324106480926275, "split": "", "dividend": "", "curPrice": 94290.0, "prePrice": 94110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:04.076000", "open": 93980.0, "close": 94080.0, "low": 93980.0, "high": 94080.0, "volume": 200.46021904051304, "split": "", "dividend": "", "curPrice": 94080.0, "prePrice": 94290.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:05.069000", "open": 94000.0, "close": 94230.0, "low": 94000.0, "high": 94290.0, "volume": 7.585661130025983, "split": "", "dividend": "", "curPrice": 94230.0, "prePrice": 94080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:06.215000", "open": 94230.0, "close": 94210.0, "low": 94210.0, "high": 94290.0, "volume": 17.465605970472097, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94230.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:07.209000", "open": 94290.0, "close": 94300.0, "low": 94210.0, "high": 94300.0, "volume": 4.502162830904126, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:08.017000", "open": 94290.0, "close": 94210.0, "low": 94210.0, "high": 94300.0, "volume": 47.26424912922084, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:09.043000", "open": 94230.0, "close": 94290.0, "low": 94210.0, "high": 94300.0, "volume": 5.603306129574776, "split": "", "dividend": "", "curPrice": 94290.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:10.087000", "open": 94290.0, "close": 94210.0, "low": 94180.0, "high": 94290.0, "volume": 44.72314037941396, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94290.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:11.039000", "open": 94210.0, "close": 94200.0, "low": 94180.0, "high": 94210.0, "volume": 1.417898841202259, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:12.055000", "open": 94140.0, "close": 94210.0, "low": 94110.0, "high": 94260.0, "volume": 0.9762871395796537, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:13.061000", "open": 94160.0, "close": 94110.0, "low": 94020.0, "high": 94180.0, "volume": 3.115242538973689, "split": "", "dividend": "", "curPrice": 94110.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:14.133000", "open": 94110.0, "close": 94110.0, "low": 94000.0, "high": 94110.0, "volume": 0.7782984804362059, "split": "", "dividend": "", "curPrice": 94110.0, "prePrice": 94110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:15.033000", "open": 94110.0, "close": 93990.0, "low": 93990.0, "high": 94110.0, "volume": 0.16760624013841152, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 94110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:16.079000", "open": 93990.0, "close": 93990.0, "low": 93990.0, "high": 94110.0, "volume": 6.027000328525901, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:17.035000", "open": 93980.0, "close": 93940.0, "low": 93900.0, "high": 94110.0, "volume": 0.3188792187720537, "split": "", "dividend": "", "curPrice": 93940.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:18.041000", "open": 93900.0, "close": 93890.0, "low": 93890.0, "high": 93990.0, "volume": 32.14688768051565, "split": "", "dividend": "", "curPrice": 93890.0, "prePrice": 93940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:19.273000", "open": 93880.0, "close": 93880.0, "low": 93880.0, "high": 93990.0, "volume": 4.192980298772454, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:20.006000", "open": 93880.0, "close": 93880.0, "low": 93880.0, "high": 93900.0, "volume": 0.514965919777751, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:21.004000", "open": 93860.0, "close": 93870.0, "low": 93800.0, "high": 93930.0, "volume": 3.910708609968424, "split": "", "dividend": "", "curPrice": 93870.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:20.962000", "open": 93850.0, "close": 93860.0, "low": 93850.0, "high": 93860.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 93860.0, "prePrice": 93870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:21.016000", "open": 93840.0, "close": 93840.0, "low": 93840.0, "high": 93840.0, "volume": 0.3196930903941393, "split": "", "dividend": "", "curPrice": 93840.0, "prePrice": 93860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:22.053000", "open": 93840.0, "close": 93830.0, "low": 93830.0, "high": 93880.0, "volume": 0.4135758504271507, "split": "", "dividend": "", "curPrice": 93830.0, "prePrice": 93840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:23.080000", "open": 93830.0, "close": 93850.0, "low": 93830.0, "high": 93880.0, "volume": 0.28391784988343716, "split": "", "dividend": "", "curPrice": 93850.0, "prePrice": 93830.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:24.002000", "open": 93840.0, "close": 93880.0, "low": 93830.0, "high": 93880.0, "volume": 3.7365792002528906, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:25.088000", "open": 93880.0, "close": 93820.0, "low": 93650.0, "high": 93900.0, "volume": 2.5742903985083103, "split": "", "dividend": "", "curPrice": 93820.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:26", "open": 93860.0, "close": 93850.0, "low": 93830.0, "high": 93870.0, "volume": 3.456344159319997, "split": "", "dividend": "", "curPrice": 93850.0, "prePrice": 93820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:27.205000", "open": 93850.0, "close": 93770.0, "low": 93650.0, "high": 93880.0, "volume": 16.404263079166412, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:28.007000", "open": 93860.0, "close": 93870.0, "low": 93770.0, "high": 93870.0, "volume": 10.24363130889833, "split": "", "dividend": "", "curPrice": 93870.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:29.171000", "open": 93850.0, "close": 93850.0, "low": 93820.0, "high": 93900.0, "volume": 1.1525733098387718, "split": "", "dividend": "", "curPrice": 93850.0, "prePrice": 93870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:30.006000", "open": 93850.0, "close": 93910.0, "low": 93830.0, "high": 93960.0, "volume": 4.119017280638218, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:31.230000", "open": 93980.0, "close": 93910.0, "low": 93900.0, "high": 94000.0, "volume": 14.033855259418488, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:32.038000", "open": 93910.0, "close": 93910.0, "low": 93830.0, "high": 94100.0, "volume": 0.6370161511003971, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:33.125000", "open": 93910.0, "close": 94020.0, "low": 93910.0, "high": 94100.0, "volume": 147.3139929510653, "split": "", "dividend": "", "curPrice": 94020.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:34.019000", "open": 94020.0, "close": 94020.0, "low": 94000.0, "high": 94110.0, "volume": 5.082250189036131, "split": "", "dividend": "", "curPrice": 94020.0, "prePrice": 94020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:35.067000", "open": 94110.0, "close": 94180.0, "low": 94110.0, "high": 94180.0, "volume": 305.80890022963285, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:36.216000", "open": 94180.0, "close": 94180.0, "low": 94180.0, "high": 94200.0, "volume": 2.167084760963917, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:37.045000", "open": 94180.0, "close": 94140.0, "low": 94140.0, "high": 94200.0, "volume": 26.316170141100883, "split": "", "dividend": "", "curPrice": 94140.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:38.176000", "open": 94140.0, "close": 94140.0, "low": 94140.0, "high": 94180.0, "volume": 31.842378390952945, "split": "", "dividend": "", "curPrice": 94140.0, "prePrice": 94140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:39.130000", "open": 94140.0, "close": 94190.0, "low": 94110.0, "high": 94200.0, "volume": 13.739891009405255, "split": "", "dividend": "", "curPrice": 94190.0, "prePrice": 94140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:40.221000", "open": 94180.0, "close": 94140.0, "low": 94110.0, "high": 94200.0, "volume": 0.9218299295753241, "split": "", "dividend": "", "curPrice": 94140.0, "prePrice": 94190.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:41.032000", "open": 94200.0, "close": 94140.0, "low": 94140.0, "high": 94200.0, "volume": 1.2490333504974842, "split": "", "dividend": "", "curPrice": 94140.0, "prePrice": 94140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:42.138000", "open": 94140.0, "close": 94100.0, "low": 94100.0, "high": 94140.0, "volume": 42.90917239896953, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:43.297000", "open": 94100.0, "close": 93990.0, "low": 93990.0, "high": 94110.0, "volume": 10.851340560242534, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:44.014000", "open": 94000.0, "close": 93910.0, "low": 93910.0, "high": 94100.0, "volume": 3.5933731589466333, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:45.057000", "open": 93940.0, "close": 93910.0, "low": 93860.0, "high": 93940.0, "volume": 2.8718809094280005, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:46.241000", "open": 93850.0, "close": 93830.0, "low": 93830.0, "high": 93940.0, "volume": 0.5579388700425625, "split": "", "dividend": "", "curPrice": 93830.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:47", "open": 93850.0, "close": 93820.0, "low": 93820.0, "high": 93890.0, "volume": 0.7890652287751436, "split": "", "dividend": "", "curPrice": 93820.0, "prePrice": 93830.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:48.240000", "open": 93830.0, "close": 93820.0, "low": 93810.0, "high": 93870.0, "volume": 7.891342159360647, "split": "", "dividend": "", "curPrice": 93820.0, "prePrice": 93820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:49.254000", "open": 93810.0, "close": 93800.0, "low": 93800.0, "high": 93890.0, "volume": 33.34509716928005, "split": "", "dividend": "", "curPrice": 93800.0, "prePrice": 93820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:50.102000", "open": 93770.0, "close": 93820.0, "low": 93770.0, "high": 93820.0, "volume": 41.82295469008386, "split": "", "dividend": "", "curPrice": 93820.0, "prePrice": 93800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:51.286000", "open": 93820.0, "close": 93790.0, "low": 93790.0, "high": 93830.0, "volume": 0.04931469075381756, "split": "", "dividend": "", "curPrice": 93790.0, "prePrice": 93820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:52.005000", "open": 93810.0, "close": 93850.0, "low": 93790.0, "high": 93850.0, "volume": 0.4560852199792862, "split": "", "dividend": "", "curPrice": 93850.0, "prePrice": 93790.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:53.043000", "open": 93830.0, "close": 93770.0, "low": 93770.0, "high": 93850.0, "volume": 7.148264979943633, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:54.012000", "open": 93760.0, "close": 93910.0, "low": 93760.0, "high": 93930.0, "volume": 15.856236780062318, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:55.166000", "open": 93910.0, "close": 93910.0, "low": 93890.0, "high": 93910.0, "volume": 5.254265008494258, "split": "", "dividend": "", "curPrice": 93910.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:56.240000", "open": 93930.0, "close": 94060.0, "low": 93930.0, "high": 94060.0, "volume": 20.70578671991825, "split": "", "dividend": "", "curPrice": 94060.0, "prePrice": 93910.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:57.100000", "open": 94050.0, "close": 93950.0, "low": 93950.0, "high": 94060.0, "volume": 58.644382109865546, "split": "", "dividend": "", "curPrice": 93950.0, "prePrice": 94060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:58.060000", "open": 93930.0, "close": 94020.0, "low": 93920.0, "high": 94060.0, "volume": 2.126058280467987, "split": "", "dividend": "", "curPrice": 94020.0, "prePrice": 93950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:18:59.235000", "open": 94020.0, "close": 94060.0, "low": 94020.0, "high": 94060.0, "volume": 2.6836433093994856, "split": "", "dividend": "", "curPrice": 94060.0, "prePrice": 94020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:00.124000", "open": 94020.0, "close": 94060.0, "low": 94020.0, "high": 94060.0, "volume": 2.1715676710009575, "split": "", "dividend": "", "curPrice": 94060.0, "prePrice": 94060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:01.087000", "open": 94080.0, "close": 94080.0, "low": 94060.0, "high": 94080.0, "volume": 21.050552720203996, "split": "", "dividend": "", "curPrice": 94080.0, "prePrice": 94060.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:02.224000", "open": 94080.0, "close": 94080.0, "low": 94040.0, "high": 94080.0, "volume": 7.822369530797005, "split": "", "dividend": "", "curPrice": 94080.0, "prePrice": 94080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:03.078000", "open": 94060.0, "close": 93990.0, "low": 93990.0, "high": 94100.0, "volume": 1.0639429688453674, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 94080.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:04.052000", "open": 93920.0, "close": 93920.0, "low": 93920.0, "high": 94100.0, "volume": 0.4989537503570318, "split": "", "dividend": "", "curPrice": 93920.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:05.072000", "open": 93910.0, "close": 93990.0, "low": 93890.0, "high": 93990.0, "volume": 56.63974777981639, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 93920.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:06.060000", "open": 93920.0, "close": 93850.0, "low": 93850.0, "high": 93990.0, "volume": 6.759376969188452, "split": "", "dividend": "", "curPrice": 93850.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:07.230000", "open": 93900.0, "close": 93850.0, "low": 93850.0, "high": 93900.0, "volume": 6.742242939770222, "split": "", "dividend": "", "curPrice": 93850.0, "prePrice": 93850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:08.211000", "open": 93850.0, "close": 93770.0, "low": 93770.0, "high": 93910.0, "volume": 2.648590810596943, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:09.031000", "open": 93850.0, "close": 93880.0, "low": 93850.0, "high": 93880.0, "volume": 3.447956280782819, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:10.031000", "open": 93850.0, "close": 93880.0, "low": 93790.0, "high": 93900.0, "volume": 15.40663612820208, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:11.189000", "open": 93880.0, "close": 93900.0, "low": 93750.0, "high": 93920.0, "volume": 8.527360239997506, "split": "", "dividend": "", "curPrice": 93900.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:12.002000", "open": 93850.0, "close": 93800.0, "low": 93700.0, "high": 93900.0, "volume": 14.97166607156396, "split": "", "dividend": "", "curPrice": 93800.0, "prePrice": 93900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:13.068000", "open": 93810.0, "close": 93940.0, "low": 93810.0, "high": 93980.0, "volume": 11.243806768208742, "split": "", "dividend": "", "curPrice": 93940.0, "prePrice": 93800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:14.166000", "open": 93940.0, "close": 93940.0, "low": 93940.0, "high": 93990.0, "volume": 11.068215990439057, "split": "", "dividend": "", "curPrice": 93940.0, "prePrice": 93940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:15.071000", "open": 93990.0, "close": 94000.0, "low": 93880.0, "high": 94000.0, "volume": 9.228598181158304, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 93940.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:16.073000", "open": 93990.0, "close": 94000.0, "low": 93900.0, "high": 94040.0, "volume": 6.753920199349523, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:17.131000", "open": 94000.0, "close": 94040.0, "low": 94000.0, "high": 94040.0, "volume": 1.827163079753518, "split": "", "dividend": "", "curPrice": 94040.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:18.018000", "open": 94040.0, "close": 94050.0, "low": 94040.0, "high": 94080.0, "volume": 5.023091008886695, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94040.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:19.067000", "open": 94050.0, "close": 94180.0, "low": 94050.0, "high": 94180.0, "volume": 0.9910719189792871, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:20.095000", "open": 94150.0, "close": 94100.0, "low": 94100.0, "high": 94180.0, "volume": 7.833120198920369, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:21.086000", "open": 94120.0, "close": 94200.0, "low": 94100.0, "high": 94200.0, "volume": 0.08501593954861164, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:22.151000", "open": 94210.0, "close": 94200.0, "low": 94100.0, "high": 94210.0, "volume": 7.6115286611020565, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:23.002000", "open": 94120.0, "close": 94200.0, "low": 94120.0, "high": 94210.0, "volume": 169.34293038025498, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:24.096000", "open": 94150.0, "close": 94210.0, "low": 94150.0, "high": 94210.0, "volume": 5.599223230034113, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:25.157000", "open": 94210.0, "close": 94150.0, "low": 94140.0, "high": 94210.0, "volume": 24.53986427001655, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:26.121000", "open": 94150.0, "close": 94150.0, "low": 94100.0, "high": 94150.0, "volume": 6.357944080606103, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:27.058000", "open": 94140.0, "close": 94120.0, "low": 94100.0, "high": 94150.0, "volume": 15.114508619531989, "split": "", "dividend": "", "curPrice": 94120.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:28.169000", "open": 94150.0, "close": 94150.0, "low": 94060.0, "high": 94150.0, "volume": 7.957363050431013, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94120.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:29.031000", "open": 94150.0, "close": 94150.0, "low": 94150.0, "high": 94160.0, "volume": 4.410135680809617, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:30.019000", "open": 94170.0, "close": 94100.0, "low": 94100.0, "high": 94170.0, "volume": 2.564785610884428, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:31.045000", "open": 94100.0, "close": 94150.0, "low": 94100.0, "high": 94170.0, "volume": 1.376846320927143, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:32.079000", "open": 94170.0, "close": 94140.0, "low": 94100.0, "high": 94170.0, "volume": 93.41432770900428, "split": "", "dividend": "", "curPrice": 94140.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:33.008000", "open": 94100.0, "close": 94150.0, "low": 94100.0, "high": 94170.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94140.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:34.005000", "open": 94150.0, "close": 94170.0, "low": 94150.0, "high": 94170.0, "volume": 11.932587340474129, "split": "", "dividend": "", "curPrice": 94170.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:35.229000", "open": 94170.0, "close": 94180.0, "low": 94150.0, "high": 94200.0, "volume": 20.354504469782114, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:36.076000", "open": 94200.0, "close": 94180.0, "low": 94180.0, "high": 94200.0, "volume": 1.0881824493408203, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:37.098000", "open": 94180.0, "close": 94210.0, "low": 94180.0, "high": 94210.0, "volume": 1.3837251905351877, "split": "", "dividend": "", "curPrice": 94210.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:38.027000", "open": 94220.0, "close": 94230.0, "low": 94200.0, "high": 94240.0, "volume": 0.23124687001109123, "split": "", "dividend": "", "curPrice": 94230.0, "prePrice": 94210.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:39.002000", "open": 94230.0, "close": 94260.0, "low": 94230.0, "high": 94270.0, "volume": 39.81083730049431, "split": "", "dividend": "", "curPrice": 94260.0, "prePrice": 94230.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:40.166000", "open": 94260.0, "close": 94330.0, "low": 94260.0, "high": 94330.0, "volume": 5.892935650423169, "split": "", "dividend": "", "curPrice": 94330.0, "prePrice": 94260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:41.164000", "open": 94300.0, "close": 94370.0, "low": 94290.0, "high": 94370.0, "volume": 45.3443692214787, "split": "", "dividend": "", "curPrice": 94370.0, "prePrice": 94330.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:42.047000", "open": 94370.0, "close": 94470.0, "low": 94350.0, "high": 94470.0, "volume": 1.1651953011751175, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:43.004000", "open": 94350.0, "close": 94470.0, "low": 94350.0, "high": 94470.0, "volume": 0.7375251408666372, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:44.004000", "open": 94470.0, "close": 94380.0, "low": 94380.0, "high": 94470.0, "volume": 14.728188160806894, "split": "", "dividend": "", "curPrice": 94380.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:45.092000", "open": 94400.0, "close": 94370.0, "low": 94370.0, "high": 94410.0, "volume": 2.5334222111850977, "split": "", "dividend": "", "curPrice": 94370.0, "prePrice": 94380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:46.033000", "open": 94380.0, "close": 94400.0, "low": 94360.0, "high": 94410.0, "volume": 0.1470448300242424, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94370.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:47.040000", "open": 94400.0, "close": 94410.0, "low": 94360.0, "high": 94410.0, "volume": 20.100624930113554, "split": "", "dividend": "", "curPrice": 94410.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:48.028000", "open": 94370.0, "close": 94410.0, "low": 94360.0, "high": 94410.0, "volume": 43.51366197876632, "split": "", "dividend": "", "curPrice": 94410.0, "prePrice": 94410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:49.112000", "open": 94400.0, "close": 94410.0, "low": 94370.0, "high": 94410.0, "volume": 17.055703839287162, "split": "", "dividend": "", "curPrice": 94410.0, "prePrice": 94410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:50.028000", "open": 94410.0, "close": 94380.0, "low": 94380.0, "high": 94430.0, "volume": 0.09839975088834763, "split": "", "dividend": "", "curPrice": 94380.0, "prePrice": 94410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:51.065000", "open": 94410.0, "close": 94410.0, "low": 94390.0, "high": 94470.0, "volume": 0.7850759103894234, "split": "", "dividend": "", "curPrice": 94410.0, "prePrice": 94380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:52.050000", "open": 94470.0, "close": 94470.0, "low": 94400.0, "high": 94470.0, "volume": 5.3310587387532, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:53.150000", "open": 94470.0, "close": 94450.0, "low": 94390.0, "high": 94470.0, "volume": 0.9377604611217976, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:54.120000", "open": 94480.0, "close": 94410.0, "low": 94400.0, "high": 94480.0, "volume": 29.398940790444613, "split": "", "dividend": "", "curPrice": 94410.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:55.066000", "open": 94410.0, "close": 94450.0, "low": 94410.0, "high": 94450.0, "volume": 9.346839589998126, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:56.152000", "open": 94450.0, "close": 94450.0, "low": 94430.0, "high": 94470.0, "volume": 12.100789200514555, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:57.297000", "open": 94430.0, "close": 94460.0, "low": 94430.0, "high": 94480.0, "volume": 26.8924084212631, "split": "", "dividend": "", "curPrice": 94460.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:58.263000", "open": 94440.0, "close": 94480.0, "low": 94430.0, "high": 94490.0, "volume": 8.44956581108272, "split": "", "dividend": "", "curPrice": 94480.0, "prePrice": 94460.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:19:59.327000", "open": 94490.0, "close": 94540.0, "low": 94470.0, "high": 94540.0, "volume": 3.630576239898801, "split": "", "dividend": "", "curPrice": 94540.0, "prePrice": 94480.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:00.024000", "open": 94500.0, "close": 94650.0, "low": 94480.0, "high": 94650.0, "volume": 17.131769670173526, "split": "", "dividend": "", "curPrice": 94650.0, "prePrice": 94540.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:01.173000", "open": 94580.0, "close": 94650.0, "low": 94550.0, "high": 94670.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 94650.0, "prePrice": 94650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:02.079000", "open": 94690.0, "close": 94650.0, "low": 94650.0, "high": 94700.0, "volume": 1.0419968497008085, "split": "", "dividend": "", "curPrice": 94650.0, "prePrice": 94650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:03.132000", "open": 94650.0, "close": 94610.0, "low": 94610.0, "high": 94730.0, "volume": 2.933081779628992, "split": "", "dividend": "", "curPrice": 94610.0, "prePrice": 94650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:04.065000", "open": 94620.0, "close": 94670.0, "low": 94610.0, "high": 94730.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 94670.0, "prePrice": 94610.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:05.003000", "open": 94670.0, "close": 94730.0, "low": 94670.0, "high": 94730.0, "volume": 35.466230330988765, "split": "", "dividend": "", "curPrice": 94730.0, "prePrice": 94670.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:06.124000", "open": 94650.0, "close": 94650.0, "low": 94580.0, "high": 94660.0, "volume": 3.2931025195866823, "split": "", "dividend": "", "curPrice": 94650.0, "prePrice": 94730.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:07.065000", "open": 94610.0, "close": 94650.0, "low": 94580.0, "high": 94650.0, "volume": 0.5043211802840233, "split": "", "dividend": "", "curPrice": 94650.0, "prePrice": 94650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:08.159000", "open": 94650.0, "close": 94610.0, "low": 94540.0, "high": 94670.0, "volume": 1.8594989702105522, "split": "", "dividend": "", "curPrice": 94610.0, "prePrice": 94650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:09.268000", "open": 94580.0, "close": 94610.0, "low": 94440.0, "high": 94640.0, "volume": 2.010785911232233, "split": "", "dividend": "", "curPrice": 94610.0, "prePrice": 94610.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:10.065000", "open": 94610.0, "close": 94520.0, "low": 94430.0, "high": 94640.0, "volume": 0.5453660599887371, "split": "", "dividend": "", "curPrice": 94520.0, "prePrice": 94610.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:11.042000", "open": 94550.0, "close": 94550.0, "low": 94400.0, "high": 94610.0, "volume": 0.10587611980736256, "split": "", "dividend": "", "curPrice": 94550.0, "prePrice": 94520.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:12.346000", "open": 94500.0, "close": 94450.0, "low": 94400.0, "high": 94500.0, "volume": 0.08474322035908699, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94550.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:13.059000", "open": 94440.0, "close": 94440.0, "low": 94440.0, "high": 94500.0, "volume": 3.3898352794349194, "split": "", "dividend": "", "curPrice": 94440.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:14.015000", "open": 94490.0, "close": 94380.0, "low": 94380.0, "high": 94500.0, "volume": 11.58295113965869, "split": "", "dividend": "", "curPrice": 94380.0, "prePrice": 94440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:15.035000", "open": 94400.0, "close": 94380.0, "low": 94380.0, "high": 94400.0, "volume": 0.4732429198920727, "split": "", "dividend": "", "curPrice": 94380.0, "prePrice": 94380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:16.101000", "open": 94380.0, "close": 94300.0, "low": 94300.0, "high": 94400.0, "volume": 3.135425331071019, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:17.072000", "open": 94370.0, "close": 94350.0, "low": 94230.0, "high": 94370.0, "volume": 0.16057773120701313, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:18.027000", "open": 94300.0, "close": 94180.0, "low": 94150.0, "high": 94300.0, "volume": 9.246034640818834, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:19.111000", "open": 94200.0, "close": 94170.0, "low": 94150.0, "high": 94200.0, "volume": 0.4260754007846117, "split": "", "dividend": "", "curPrice": 94170.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:20.059000", "open": 94170.0, "close": 94160.0, "low": 94100.0, "high": 94180.0, "volume": 0.07309951074421406, "split": "", "dividend": "", "curPrice": 94160.0, "prePrice": 94170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:21.034000", "open": 94100.0, "close": 94100.0, "low": 94090.0, "high": 94200.0, "volume": 2.9354504011571407, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94160.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:22.209000", "open": 94210.0, "close": 94100.0, "low": 94060.0, "high": 94210.0, "volume": 13.800592800602317, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:23.063000", "open": 94050.0, "close": 94150.0, "low": 94050.0, "high": 94210.0, "volume": 7.817437790334225, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:24.055000", "open": 94210.0, "close": 94150.0, "low": 94150.0, "high": 94210.0, "volume": 103.6545462589711, "split": "", "dividend": "", "curPrice": 94150.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:25.281000", "open": 94150.0, "close": 94190.0, "low": 94150.0, "high": 94300.0, "volume": 163.20487171038985, "split": "", "dividend": "", "curPrice": 94190.0, "prePrice": 94150.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:26.051000", "open": 94150.0, "close": 94220.0, "low": 94150.0, "high": 94350.0, "volume": 2.5763871204108, "split": "", "dividend": "", "curPrice": 94220.0, "prePrice": 94190.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:27.156000", "open": 94210.0, "close": 94300.0, "low": 94210.0, "high": 94370.0, "volume": 0.4891523104161024, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94220.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:28.266000", "open": 94350.0, "close": 94230.0, "low": 94230.0, "high": 94400.0, "volume": 17.404100369662046, "split": "", "dividend": "", "curPrice": 94230.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:29.141000", "open": 94210.0, "close": 94300.0, "low": 94210.0, "high": 94400.0, "volume": 0.22468456998467445, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94230.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:30.064000", "open": 94350.0, "close": 94350.0, "low": 94350.0, "high": 94350.0, "volume": 16.404387909919024, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:31.235000", "open": 94310.0, "close": 94300.0, "low": 94300.0, "high": 94350.0, "volume": 46.04386454075575, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:32.212000", "open": 94300.0, "close": 94310.0, "low": 94300.0, "high": 94340.0, "volume": 2.152723640203476, "split": "", "dividend": "", "curPrice": 94310.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:33.151000", "open": 94340.0, "close": 94350.0, "low": 94310.0, "high": 94350.0, "volume": 21.539654079824686, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94310.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:34.031000", "open": 94350.0, "close": 94350.0, "low": 94350.0, "high": 94350.0, "volume": 3.179650239646435, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:35.122000", "open": 94350.0, "close": 94380.0, "low": 94350.0, "high": 94380.0, "volume": 0.6835080999881029, "split": "", "dividend": "", "curPrice": 94380.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:36.442000", "open": 94380.0, "close": 94390.0, "low": 94380.0, "high": 94400.0, "volume": 0.317124729976058, "split": "", "dividend": "", "curPrice": 94390.0, "prePrice": 94380.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:37.218000", "open": 94350.0, "close": 94390.0, "low": 94350.0, "high": 94390.0, "volume": 0.453955989331007, "split": "", "dividend": "", "curPrice": 94390.0, "prePrice": 94390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:38.101000", "open": 94390.0, "close": 94390.0, "low": 94390.0, "high": 94390.0, "volume": 27.440572740510106, "split": "", "dividend": "", "curPrice": 94390.0, "prePrice": 94390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:39.087000", "open": 94390.0, "close": 94390.0, "low": 94390.0, "high": 94400.0, "volume": 1.0, "split": "", "dividend": "", "curPrice": 94390.0, "prePrice": 94390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:40.015000", "open": 94400.0, "close": 94400.0, "low": 94390.0, "high": 94400.0, "volume": 0.45129648968577385, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94390.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:41.162000", "open": 94400.0, "close": 94400.0, "low": 94390.0, "high": 94400.0, "volume": 0.6215572003275156, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:42.007000", "open": 94390.0, "close": 94400.0, "low": 94390.0, "high": 94400.0, "volume": 2.0, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:43.024000", "open": 94390.0, "close": 94400.0, "low": 94390.0, "high": 94400.0, "volume": 6.716024210676551, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:44.311000", "open": 94400.0, "close": 94400.0, "low": 94400.0, "high": 94430.0, "volume": 0.05507944896817207, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:45.019000", "open": 94440.0, "close": 94400.0, "low": 94400.0, "high": 94440.0, "volume": 35.874266531318426, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:46.222000", "open": 94400.0, "close": 94430.0, "low": 94400.0, "high": 94430.0, "volume": 6.942854760214686, "split": "", "dividend": "", "curPrice": 94430.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:47.046000", "open": 94440.0, "close": 94400.0, "low": 94400.0, "high": 94440.0, "volume": 4.24178153835237, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94430.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:48.186000", "open": 94400.0, "close": 94440.0, "low": 94390.0, "high": 94440.0, "volume": 2.564785610884428, "split": "", "dividend": "", "curPrice": 94440.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:49.274000", "open": 94440.0, "close": 94470.0, "low": 94440.0, "high": 94470.0, "volume": 1.7027714904397726, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:50.145000", "open": 94470.0, "close": 94440.0, "low": 94390.0, "high": 94470.0, "volume": 33.40926017984748, "split": "", "dividend": "", "curPrice": 94440.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:51.048000", "open": 94390.0, "close": 94470.0, "low": 94390.0, "high": 94470.0, "volume": 11.054503250867128, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:52.177000", "open": 94440.0, "close": 94450.0, "low": 94440.0, "high": 94490.0, "volume": 0.6610670313239098, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:53.003000", "open": 94440.0, "close": 94470.0, "low": 94440.0, "high": 94470.0, "volume": 1.5450184512883425, "split": "", "dividend": "", "curPrice": 94470.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:54.062000", "open": 94490.0, "close": 94500.0, "low": 94470.0, "high": 94500.0, "volume": 10.328905899077654, "split": "", "dividend": "", "curPrice": 94500.0, "prePrice": 94470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:55.021000", "open": 94480.0, "close": 94490.0, "low": 94400.0, "high": 94500.0, "volume": 19.927454190328717, "split": "", "dividend": "", "curPrice": 94490.0, "prePrice": 94500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:56.246000", "open": 94400.0, "close": 94350.0, "low": 94350.0, "high": 94500.0, "volume": 17.710005979985, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:57.354000", "open": 94400.0, "close": 94350.0, "low": 94350.0, "high": 94440.0, "volume": 5.585871448740363, "split": "", "dividend": "", "curPrice": 94350.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:58.068000", "open": 94390.0, "close": 94440.0, "low": 94390.0, "high": 94440.0, "volume": 8.984345329925418, "split": "", "dividend": "", "curPrice": 94440.0, "prePrice": 94350.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:20:59.015000", "open": 94440.0, "close": 94260.0, "low": 94260.0, "high": 94440.0, "volume": 11.604665338993073, "split": "", "dividend": "", "curPrice": 94260.0, "prePrice": 94440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:00.045000", "open": 94280.0, "close": 94260.0, "low": 94150.0, "high": 94440.0, "volume": 59.3028431404382, "split": "", "dividend": "", "curPrice": 94260.0, "prePrice": 94260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:01.042000", "open": 94230.0, "close": 94010.0, "low": 94010.0, "high": 94300.0, "volume": 2.492600440979004, "split": "", "dividend": "", "curPrice": 94010.0, "prePrice": 94260.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:02.278000", "open": 94010.0, "close": 94020.0, "low": 94000.0, "high": 94020.0, "volume": 189.11155739054084, "split": "", "dividend": "", "curPrice": 94020.0, "prePrice": 94010.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:03.280000", "open": 94020.0, "close": 94000.0, "low": 94000.0, "high": 94020.0, "volume": 0.21276595070958138, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 94020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:04.126000", "open": 94000.0, "close": 93950.0, "low": 93950.0, "high": 94010.0, "volume": 0.116551348939538, "split": "", "dividend": "", "curPrice": 93950.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:05.009000", "open": 93900.0, "close": 93900.0, "low": 93880.0, "high": 93980.0, "volume": 0.5450905207544565, "split": "", "dividend": "", "curPrice": 93900.0, "prePrice": 93950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:06.067000", "open": 93880.0, "close": 93880.0, "low": 93850.0, "high": 93900.0, "volume": 43.54194375127554, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:07.063000", "open": 93880.0, "close": 93780.0, "low": 93780.0, "high": 93880.0, "volume": 2.1284470800310373, "split": "", "dividend": "", "curPrice": 93780.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:08.143000", "open": 93880.0, "close": 93770.0, "low": 93770.0, "high": 93900.0, "volume": 0.12000000104308128, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93780.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:09.018000", "open": 93770.0, "close": 93900.0, "low": 93760.0, "high": 93900.0, "volume": 6.876731930300593, "split": "", "dividend": "", "curPrice": 93900.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:10.151000", "open": 93830.0, "close": 93880.0, "low": 93700.0, "high": 93880.0, "volume": 37.72058333083987, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93900.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:11.074000", "open": 93780.0, "close": 93700.0, "low": 93690.0, "high": 93780.0, "volume": 6.699130680412054, "split": "", "dividend": "", "curPrice": 93700.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:12.123000", "open": 93700.0, "close": 93700.0, "low": 93680.0, "high": 93730.0, "volume": 17.124308170750737, "split": "", "dividend": "", "curPrice": 93700.0, "prePrice": 93700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:13.225000", "open": 93700.0, "close": 93670.0, "low": 93620.0, "high": 93810.0, "volume": 22.697559179738164, "split": "", "dividend": "", "curPrice": 93670.0, "prePrice": 93700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:14.209000", "open": 93640.0, "close": 93640.0, "low": 93600.0, "high": 93810.0, "volume": 257.9831333309412, "split": "", "dividend": "", "curPrice": 93640.0, "prePrice": 93670.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:15.006000", "open": 93700.0, "close": 93680.0, "low": 93600.0, "high": 93800.0, "volume": 4.785395910963416, "split": "", "dividend": "", "curPrice": 93680.0, "prePrice": 93640.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:16.275000", "open": 93700.0, "close": 93680.0, "low": 93650.0, "high": 93700.0, "volume": 2.5497505702078342, "split": "", "dividend": "", "curPrice": 93680.0, "prePrice": 93680.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:17.006000", "open": 93700.0, "close": 93700.0, "low": 93620.0, "high": 93700.0, "volume": 0.6590194702148438, "split": "", "dividend": "", "curPrice": 93700.0, "prePrice": 93680.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:18.018000", "open": 93620.0, "close": 93680.0, "low": 93600.0, "high": 93700.0, "volume": 0.1475063506513834, "split": "", "dividend": "", "curPrice": 93680.0, "prePrice": 93700.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:19.231000", "open": 93620.0, "close": 93590.0, "low": 93590.0, "high": 93680.0, "volume": 2.4425826594233513, "split": "", "dividend": "", "curPrice": 93590.0, "prePrice": 93680.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:20.023000", "open": 93590.0, "close": 93530.0, "low": 93530.0, "high": 93620.0, "volume": 11.36537953838706, "split": "", "dividend": "", "curPrice": 93530.0, "prePrice": 93590.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:21.019000", "open": 93560.0, "close": 93620.0, "low": 93500.0, "high": 93680.0, "volume": 15.720412388443947, "split": "", "dividend": "", "curPrice": 93620.0, "prePrice": 93530.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:22.064000", "open": 93620.0, "close": 93500.0, "low": 93500.0, "high": 93640.0, "volume": 2.2627860102802515, "split": "", "dividend": "", "curPrice": 93500.0, "prePrice": 93620.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:23.066000", "open": 93520.0, "close": 93470.0, "low": 93470.0, "high": 93530.0, "volume": 0.18933475017547607, "split": "", "dividend": "", "curPrice": 93470.0, "prePrice": 93500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:24.024000", "open": 93470.0, "close": 93480.0, "low": 93410.0, "high": 93480.0, "volume": 11.647928828373551, "split": "", "dividend": "", "curPrice": 93480.0, "prePrice": 93470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:25.163000", "open": 93400.0, "close": 93450.0, "low": 93400.0, "high": 93500.0, "volume": 1.1399775799363852, "split": "", "dividend": "", "curPrice": 93450.0, "prePrice": 93480.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:26.045000", "open": 93490.0, "close": 93450.0, "low": 93330.0, "high": 93490.0, "volume": 0.15525808185338974, "split": "", "dividend": "", "curPrice": 93450.0, "prePrice": 93450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:27.018000", "open": 93410.0, "close": 93340.0, "low": 93330.0, "high": 93490.0, "volume": 0.06168548949062824, "split": "", "dividend": "", "curPrice": 93340.0, "prePrice": 93450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:28.026000", "open": 93490.0, "close": 93400.0, "low": 93340.0, "high": 93490.0, "volume": 1.6873588599264622, "split": "", "dividend": "", "curPrice": 93400.0, "prePrice": 93340.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:29.022000", "open": 93340.0, "close": 93340.0, "low": 93330.0, "high": 93410.0, "volume": 0.060695940628647804, "split": "", "dividend": "", "curPrice": 93340.0, "prePrice": 93400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:30.009000", "open": 93380.0, "close": 93400.0, "low": 93340.0, "high": 93410.0, "volume": 14.44097257964313, "split": "", "dividend": "", "curPrice": 93400.0, "prePrice": 93340.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:31.041000", "open": 93400.0, "close": 93410.0, "low": 93400.0, "high": 93410.0, "volume": 8.932569479569793, "split": "", "dividend": "", "curPrice": 93410.0, "prePrice": 93400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:32.093000", "open": 93410.0, "close": 93680.0, "low": 93400.0, "high": 93680.0, "volume": 0.06390298902988434, "split": "", "dividend": "", "curPrice": 93680.0, "prePrice": 93410.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:33.078000", "open": 93510.0, "close": 93580.0, "low": 93490.0, "high": 93680.0, "volume": 8.819671250879765, "split": "", "dividend": "", "curPrice": 93580.0, "prePrice": 93680.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:34.021000", "open": 93610.0, "close": 93680.0, "low": 93580.0, "high": 93680.0, "volume": 27.102486981078982, "split": "", "dividend": "", "curPrice": 93680.0, "prePrice": 93580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:35.115000", "open": 93690.0, "close": 93580.0, "low": 93580.0, "high": 93770.0, "volume": 0.5373605601489544, "split": "", "dividend": "", "curPrice": 93580.0, "prePrice": 93680.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:36.097000", "open": 93610.0, "close": 93770.0, "low": 93580.0, "high": 93770.0, "volume": 0.06060587987303734, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:37.074000", "open": 93770.0, "close": 93690.0, "low": 93600.0, "high": 93770.0, "volume": 0.06195582076907158, "split": "", "dividend": "", "curPrice": 93690.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:38.001000", "open": 93690.0, "close": 93770.0, "low": 93690.0, "high": 93810.0, "volume": 0.06064922921359539, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:39.037000", "open": 93690.0, "close": 93710.0, "low": 93620.0, "high": 93810.0, "volume": 0.06079791113734245, "split": "", "dividend": "", "curPrice": 93710.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:40.052000", "open": 93620.0, "close": 93690.0, "low": 93620.0, "high": 93750.0, "volume": 3.9383203890174627, "split": "", "dividend": "", "curPrice": 93690.0, "prePrice": 93710.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:41.001000", "open": 93620.0, "close": 93690.0, "low": 93620.0, "high": 93770.0, "volume": 6.6457921005785465, "split": "", "dividend": "", "curPrice": 93690.0, "prePrice": 93690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:42", "open": 93690.0, "close": 93710.0, "low": 93620.0, "high": 93770.0, "volume": 0.061779169365763664, "split": "", "dividend": "", "curPrice": 93710.0, "prePrice": 93690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:43.012000", "open": 93770.0, "close": 93640.0, "low": 93620.0, "high": 93770.0, "volume": 0.06064569018781185, "split": "", "dividend": "", "curPrice": 93640.0, "prePrice": 93710.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:44.012000", "open": 93750.0, "close": 93690.0, "low": 93690.0, "high": 93770.0, "volume": 0.06125126965343952, "split": "", "dividend": "", "curPrice": 93690.0, "prePrice": 93640.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:45.176000", "open": 93770.0, "close": 93800.0, "low": 93690.0, "high": 93800.0, "volume": 23.529743948951364, "split": "", "dividend": "", "curPrice": 93800.0, "prePrice": 93690.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:46.062000", "open": 93770.0, "close": 93840.0, "low": 93710.0, "high": 93840.0, "volume": 4.590224189683795, "split": "", "dividend": "", "curPrice": 93840.0, "prePrice": 93800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:47.102000", "open": 93890.0, "close": 93890.0, "low": 93710.0, "high": 93900.0, "volume": 0.06388580054044724, "split": "", "dividend": "", "curPrice": 93890.0, "prePrice": 93840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:48.088000", "open": 93870.0, "close": 93890.0, "low": 93870.0, "high": 93900.0, "volume": 0.06075067073106766, "split": "", "dividend": "", "curPrice": 93890.0, "prePrice": 93890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:49.132000", "open": 93890.0, "close": 93740.0, "low": 93740.0, "high": 93890.0, "volume": 4.9242991004139185, "split": "", "dividend": "", "curPrice": 93740.0, "prePrice": 93890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:50.048000", "open": 93770.0, "close": 93870.0, "low": 93740.0, "high": 93890.0, "volume": 43.509732438251376, "split": "", "dividend": "", "curPrice": 93870.0, "prePrice": 93740.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:51.012000", "open": 93870.0, "close": 93890.0, "low": 93710.0, "high": 93890.0, "volume": 3.202264679595828, "split": "", "dividend": "", "curPrice": 93890.0, "prePrice": 93870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:52.066000", "open": 93710.0, "close": 93870.0, "low": 93710.0, "high": 93890.0, "volume": 0.06062684953212738, "split": "", "dividend": "", "curPrice": 93870.0, "prePrice": 93890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:53.118000", "open": 93870.0, "close": 93840.0, "low": 93840.0, "high": 93870.0, "volume": 0.06303231976926327, "split": "", "dividend": "", "curPrice": 93840.0, "prePrice": 93870.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:54.019000", "open": 93840.0, "close": 93840.0, "low": 93770.0, "high": 93870.0, "volume": 0.060913240537047386, "split": "", "dividend": "", "curPrice": 93840.0, "prePrice": 93840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:55.173000", "open": 93840.0, "close": 93710.0, "low": 93710.0, "high": 93870.0, "volume": 13.207799790427089, "split": "", "dividend": "", "curPrice": 93710.0, "prePrice": 93840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:56.165000", "open": 93710.0, "close": 93710.0, "low": 93710.0, "high": 93820.0, "volume": 17.373033680021763, "split": "", "dividend": "", "curPrice": 93710.0, "prePrice": 93710.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:57.066000", "open": 93690.0, "close": 93810.0, "low": 93690.0, "high": 93820.0, "volume": 0.06299050897359848, "split": "", "dividend": "", "curPrice": 93810.0, "prePrice": 93710.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:58.006000", "open": 93700.0, "close": 93770.0, "low": 93650.0, "high": 93810.0, "volume": 0.06070940010249615, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93810.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:21:59", "open": 93650.0, "close": 93600.0, "low": 93600.0, "high": 93810.0, "volume": 23.64157759025693, "split": "", "dividend": "", "curPrice": 93600.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:00.152000", "open": 93600.0, "close": 93600.0, "low": 93600.0, "high": 93600.0, "volume": 6.277119880542159, "split": "", "dividend": "", "curPrice": 93600.0, "prePrice": 93600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:01.160000", "open": 93610.0, "close": 93610.0, "low": 93580.0, "high": 93610.0, "volume": 0.06060433015227318, "split": "", "dividend": "", "curPrice": 93610.0, "prePrice": 93600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:02.073000", "open": 93610.0, "close": 93510.0, "low": 93510.0, "high": 93610.0, "volume": 3.4238090813159943, "split": "", "dividend": "", "curPrice": 93510.0, "prePrice": 93610.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:03.121000", "open": 93520.0, "close": 93510.0, "low": 93510.0, "high": 93600.0, "volume": 0.06081102974712849, "split": "", "dividend": "", "curPrice": 93510.0, "prePrice": 93510.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:04.056000", "open": 93520.0, "close": 93530.0, "low": 93500.0, "high": 93600.0, "volume": 6.508277390152216, "split": "", "dividend": "", "curPrice": 93530.0, "prePrice": 93510.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:05.099000", "open": 93600.0, "close": 93470.0, "low": 93470.0, "high": 93640.0, "volume": 0.06096961908042431, "split": "", "dividend": "", "curPrice": 93470.0, "prePrice": 93530.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:06.020000", "open": 93610.0, "close": 93600.0, "low": 93510.0, "high": 93610.0, "volume": 0.06066235899925232, "split": "", "dividend": "", "curPrice": 93600.0, "prePrice": 93470.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:07.200000", "open": 93650.0, "close": 93520.0, "low": 93480.0, "high": 93650.0, "volume": 0.06105213984847069, "split": "", "dividend": "", "curPrice": 93520.0, "prePrice": 93600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:08.029000", "open": 93650.0, "close": 93600.0, "low": 93520.0, "high": 93650.0, "volume": 0.4102711211889982, "split": "", "dividend": "", "curPrice": 93600.0, "prePrice": 93520.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:09.066000", "open": 93640.0, "close": 93640.0, "low": 93450.0, "high": 93770.0, "volume": 0.06060638092458248, "split": "", "dividend": "", "curPrice": 93640.0, "prePrice": 93600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:10.045000", "open": 93480.0, "close": 93600.0, "low": 93450.0, "high": 93600.0, "volume": 0.060727450996637344, "split": "", "dividend": "", "curPrice": 93600.0, "prePrice": 93640.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:11.011000", "open": 93550.0, "close": 93580.0, "low": 93550.0, "high": 93580.0, "volume": 1.5502243991941214, "split": "", "dividend": "", "curPrice": 93580.0, "prePrice": 93600.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:12.112000", "open": 93580.0, "close": 93550.0, "low": 93420.0, "high": 93580.0, "volume": 10.126582270488143, "split": "", "dividend": "", "curPrice": 93550.0, "prePrice": 93580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:13.102000", "open": 93560.0, "close": 93580.0, "low": 93550.0, "high": 93590.0, "volume": 3.7302321512252092, "split": "", "dividend": "", "curPrice": 93580.0, "prePrice": 93550.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:14.061000", "open": 93600.0, "close": 93550.0, "low": 93520.0, "high": 93640.0, "volume": 0.0, "split": "", "dividend": "", "curPrice": 93550.0, "prePrice": 93580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:15.022000", "open": 93580.0, "close": 93550.0, "low": 93550.0, "high": 93640.0, "volume": 6.273595560342073, "split": "", "dividend": "", "curPrice": 93550.0, "prePrice": 93550.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:16.118000", "open": 93550.0, "close": 93550.0, "low": 93550.0, "high": 93600.0, "volume": 0.06076369062066078, "split": "", "dividend": "", "curPrice": 93550.0, "prePrice": 93550.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:17.022000", "open": 93550.0, "close": 93630.0, "low": 93550.0, "high": 93710.0, "volume": 0.0611270796507597, "split": "", "dividend": "", "curPrice": 93630.0, "prePrice": 93550.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:18.099000", "open": 93710.0, "close": 93710.0, "low": 93630.0, "high": 93760.0, "volume": 0.06088726036250591, "split": "", "dividend": "", "curPrice": 93710.0, "prePrice": 93630.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:19.089000", "open": 93760.0, "close": 93750.0, "low": 93710.0, "high": 93760.0, "volume": 3.1203946601599455, "split": "", "dividend": "", "curPrice": 93750.0, "prePrice": 93710.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:20.062000", "open": 93710.0, "close": 93760.0, "low": 93710.0, "high": 93770.0, "volume": 0.06185990013182163, "split": "", "dividend": "", "curPrice": 93760.0, "prePrice": 93750.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:21.085000", "open": 93760.0, "close": 93770.0, "low": 93760.0, "high": 93800.0, "volume": 0.22978349030017853, "split": "", "dividend": "", "curPrice": 93770.0, "prePrice": 93760.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:22", "open": 93770.0, "close": 93800.0, "low": 93770.0, "high": 93830.0, "volume": 0.5014833007007837, "split": "", "dividend": "", "curPrice": 93800.0, "prePrice": 93770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:23.072000", "open": 93820.0, "close": 93830.0, "low": 93770.0, "high": 93840.0, "volume": 21.768993381410837, "split": "", "dividend": "", "curPrice": 93830.0, "prePrice": 93800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:24.239000", "open": 93830.0, "close": 93860.0, "low": 93820.0, "high": 93880.0, "volume": 0.06417660973966122, "split": "", "dividend": "", "curPrice": 93860.0, "prePrice": 93830.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:25.044000", "open": 93880.0, "close": 93880.0, "low": 93860.0, "high": 93880.0, "volume": 0.06449005007743835, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:26.064000", "open": 93880.0, "close": 93890.0, "low": 93860.0, "high": 93890.0, "volume": 2.123825751245022, "split": "", "dividend": "", "curPrice": 93890.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:27.119000", "open": 93880.0, "close": 93880.0, "low": 93880.0, "high": 93900.0, "volume": 0.06120702065527439, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:28.375000", "open": 93900.0, "close": 94000.0, "low": 93880.0, "high": 94000.0, "volume": 0.3022659495472908, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:29.071000", "open": 93950.0, "close": 93860.0, "low": 93860.0, "high": 93950.0, "volume": 0.06187932938337326, "split": "", "dividend": "", "curPrice": 93860.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:30.230000", "open": 93940.0, "close": 93950.0, "low": 93860.0, "high": 94000.0, "volume": 0.5175847504287958, "split": "", "dividend": "", "curPrice": 93950.0, "prePrice": 93860.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:31.013000", "open": 94000.0, "close": 94010.0, "low": 93890.0, "high": 94010.0, "volume": 0.06065178103744984, "split": "", "dividend": "", "curPrice": 94010.0, "prePrice": 93950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:32.073000", "open": 94000.0, "close": 94050.0, "low": 93940.0, "high": 94050.0, "volume": 10.197848439216614, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94010.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:33.049000", "open": 94070.0, "close": 94130.0, "low": 94000.0, "high": 94130.0, "volume": 0.060800520703196526, "split": "", "dividend": "", "curPrice": 94130.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:34.062000", "open": 94050.0, "close": 94020.0, "low": 94020.0, "high": 94130.0, "volume": 0.06084367074072361, "split": "", "dividend": "", "curPrice": 94020.0, "prePrice": 94130.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:35.075000", "open": 94050.0, "close": 94200.0, "low": 94040.0, "high": 94270.0, "volume": 0.060743700712919235, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:36.023000", "open": 94130.0, "close": 94130.0, "low": 94130.0, "high": 94200.0, "volume": 5.317110789939761, "split": "", "dividend": "", "curPrice": 94130.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:37.036000", "open": 94130.0, "close": 94200.0, "low": 94130.0, "high": 94200.0, "volume": 26.974282030016184, "split": "", "dividend": "", "curPrice": 94200.0, "prePrice": 94130.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:38.069000", "open": 94200.0, "close": 94110.0, "low": 94070.0, "high": 94200.0, "volume": 20.729443799704313, "split": "", "dividend": "", "curPrice": 94110.0, "prePrice": 94200.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:39.037000", "open": 94100.0, "close": 93890.0, "low": 93890.0, "high": 94130.0, "volume": 0.06489717960357666, "split": "", "dividend": "", "curPrice": 93890.0, "prePrice": 94110.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:40.102000", "open": 94000.0, "close": 93880.0, "low": 93880.0, "high": 94090.0, "volume": 11.499050039798021, "split": "", "dividend": "", "curPrice": 93880.0, "prePrice": 93890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:41.163000", "open": 94020.0, "close": 93840.0, "low": 93780.0, "high": 94020.0, "volume": 0.9857283607125282, "split": "", "dividend": "", "curPrice": 93840.0, "prePrice": 93880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:42.024000", "open": 93840.0, "close": 94000.0, "low": 93770.0, "high": 94020.0, "volume": 0.06091684103012085, "split": "", "dividend": "", "curPrice": 94000.0, "prePrice": 93840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:43.006000", "open": 93910.0, "close": 93820.0, "low": 93820.0, "high": 94000.0, "volume": 0.06071965955197811, "split": "", "dividend": "", "curPrice": 93820.0, "prePrice": 94000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:44.015000", "open": 94000.0, "close": 93840.0, "low": 93820.0, "high": 94000.0, "volume": 0.06125098094344139, "split": "", "dividend": "", "curPrice": 93840.0, "prePrice": 93820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:45.005000", "open": 93880.0, "close": 93950.0, "low": 93820.0, "high": 94000.0, "volume": 0.060781100764870644, "split": "", "dividend": "", "curPrice": 93950.0, "prePrice": 93840.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:46.143000", "open": 93880.0, "close": 93950.0, "low": 93880.0, "high": 93950.0, "volume": 0.06197851151227951, "split": "", "dividend": "", "curPrice": 93950.0, "prePrice": 93950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:47.097000", "open": 93880.0, "close": 93950.0, "low": 93880.0, "high": 94020.0, "volume": 0.9969207402318716, "split": "", "dividend": "", "curPrice": 93950.0, "prePrice": 93950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:48.012000", "open": 93880.0, "close": 93990.0, "low": 93880.0, "high": 94020.0, "volume": 0.06467367894947529, "split": "", "dividend": "", "curPrice": 93990.0, "prePrice": 93950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:49.013000", "open": 94020.0, "close": 94010.0, "low": 93950.0, "high": 94020.0, "volume": 0.01683844067156315, "split": "", "dividend": "", "curPrice": 94010.0, "prePrice": 93990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:50.082000", "open": 93950.0, "close": 94020.0, "low": 93950.0, "high": 94020.0, "volume": 0.282385740429163, "split": "", "dividend": "", "curPrice": 94020.0, "prePrice": 94010.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:51.027000", "open": 94050.0, "close": 93960.0, "low": 93960.0, "high": 94050.0, "volume": 0.06125967018306255, "split": "", "dividend": "", "curPrice": 93960.0, "prePrice": 94020.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:52.027000", "open": 93960.0, "close": 94050.0, "low": 93950.0, "high": 94070.0, "volume": 2.711136979982257, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 93960.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:53.083000", "open": 94050.0, "close": 94050.0, "low": 94050.0, "high": 94090.0, "volume": 0.06258857063949108, "split": "", "dividend": "", "curPrice": 94050.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:54.094000", "open": 94090.0, "close": 94070.0, "low": 94050.0, "high": 94090.0, "volume": 0.062140461057424545, "split": "", "dividend": "", "curPrice": 94070.0, "prePrice": 94050.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:55.024000", "open": 94090.0, "close": 94100.0, "low": 94070.0, "high": 94110.0, "volume": 21.264480059966445, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94070.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:56.180000", "open": 94100.0, "close": 94100.0, "low": 94090.0, "high": 94110.0, "volume": 0.06112626940011978, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:57.056000", "open": 94110.0, "close": 94100.0, "low": 94090.0, "high": 94110.0, "volume": 0.06120671145617962, "split": "", "dividend": "", "curPrice": 94100.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:58.206000", "open": 94100.0, "close": 94090.0, "low": 94090.0, "high": 94110.0, "volume": 9.235302960500121, "split": "", "dividend": "", "curPrice": 94090.0, "prePrice": 94100.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:22:59.130000", "open": 94110.0, "close": 94170.0, "low": 94070.0, "high": 94170.0, "volume": 2.6113859601318836, "split": "", "dividend": "", "curPrice": 94170.0, "prePrice": 94090.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:00.008000", "open": 94140.0, "close": 94170.0, "low": 94110.0, "high": 94170.0, "volume": 0.06060211919248104, "split": "", "dividend": "", "curPrice": 94170.0, "prePrice": 94170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:01.038000", "open": 94170.0, "close": 94190.0, "low": 94140.0, "high": 94190.0, "volume": 0.7353450804948807, "split": "", "dividend": "", "curPrice": 94190.0, "prePrice": 94170.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:02.028000", "open": 94170.0, "close": 94180.0, "low": 94170.0, "high": 94200.0, "volume": 0.05392980948090553, "split": "", "dividend": "", "curPrice": 94180.0, "prePrice": 94190.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:03.016000", "open": 94180.0, "close": 94300.0, "low": 94180.0, "high": 94300.0, "volume": 0.06395034119486809, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94180.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:04.049000", "open": 94200.0, "close": 94300.0, "low": 94200.0, "high": 94300.0, "volume": 0.06564484909176826, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:05.055000", "open": 94210.0, "close": 94300.0, "low": 94210.0, "high": 94300.0, "volume": 0.0606148187071085, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:06.103000", "open": 94210.0, "close": 94300.0, "low": 94210.0, "high": 94350.0, "volume": 1.1186757981777191, "split": "", "dividend": "", "curPrice": 94300.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:07.184000", "open": 94300.0, "close": 94450.0, "low": 94300.0, "high": 94450.0, "volume": 13.48094553872943, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94300.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:08.011000", "open": 94400.0, "close": 94460.0, "low": 94300.0, "high": 94460.0, "volume": 0.06078789010643959, "split": "", "dividend": "", "curPrice": 94460.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:09.029000", "open": 94400.0, "close": 94400.0, "low": 94400.0, "high": 94460.0, "volume": 0.06438903138041496, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94460.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:10.016000", "open": 94460.0, "close": 94450.0, "low": 94390.0, "high": 94490.0, "volume": 0.10587611980736256, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:11.089000", "open": 94450.0, "close": 94460.0, "low": 94390.0, "high": 94460.0, "volume": 0.06062813103199005, "split": "", "dividend": "", "curPrice": 94460.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:12.140000", "open": 94450.0, "close": 94450.0, "low": 94390.0, "high": 94460.0, "volume": 3.401661340147257, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94460.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:13.164000", "open": 94460.0, "close": 94450.0, "low": 94400.0, "high": 94460.0, "volume": 0.06356352008879185, "split": "", "dividend": "", "curPrice": 94450.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:14.083000", "open": 94440.0, "close": 94400.0, "low": 94350.0, "high": 94470.0, "volume": 0.061101630330085754, "split": "", "dividend": "", "curPrice": 94400.0, "prePrice": 94450.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:15.005000", "open": 94400.0, "close": 94460.0, "low": 94400.0, "high": 94470.0, "volume": 0.06359239108860493, "split": "", "dividend": "", "curPrice": 94460.0, "prePrice": 94400.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:16.034000", "open": 94470.0, "close": 94490.0, "low": 94420.0, "high": 94490.0, "volume": 3.8146526906639338, "split": "", "dividend": "", "curPrice": 94490.0, "prePrice": 94460.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:17.059000", "open": 94480.0, "close": 94440.0, "low": 94420.0, "high": 94500.0, "volume": 6.0650862995535135, "split": "", "dividend": "", "curPrice": 94440.0, "prePrice": 94490.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:18.003000", "open": 94460.0, "close": 94460.0, "low": 94420.0, "high": 94460.0, "volume": 2.238496821373701, "split": "", "dividend": "", "curPrice": 94460.0, "prePrice": 94440.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:19.040000", "open": 94450.0, "close": 94500.0, "low": 94440.0, "high": 94500.0, "volume": 10.57671957090497, "split": "", "dividend": "", "curPrice": 94500.0, "prePrice": 94460.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:20.211000", "open": 94470.0, "close": 94630.0, "low": 94460.0, "high": 94630.0, "volume": 0.06095121055841446, "split": "", "dividend": "", "curPrice": 94630.0, "prePrice": 94500.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:21.063000", "open": 94500.0, "close": 94650.0, "low": 94500.0, "high": 94670.0, "volume": 72.67786931060255, "split": "", "dividend": "", "curPrice": 94650.0, "prePrice": 94630.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:22.056000", "open": 94660.0, "close": 94800.0, "low": 94500.0, "high": 94800.0, "volume": 6.279061179608107, "split": "", "dividend": "", "curPrice": 94800.0, "prePrice": 94650.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:23.046000", "open": 94540.0, "close": 94570.0, "low": 94510.0, "high": 94800.0, "volume": 4.879718719050288, "split": "", "dividend": "", "curPrice": 94570.0, "prePrice": 94800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:24.016000", "open": 94550.0, "close": 94570.0, "low": 94540.0, "high": 94800.0, "volume": 0.06064956076443195, "split": "", "dividend": "", "curPrice": 94570.0, "prePrice": 94570.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:25.015000", "open": 94800.0, "close": 94740.0, "low": 94570.0, "high": 94800.0, "volume": 0.6684520598500967, "split": "", "dividend": "", "curPrice": 94740.0, "prePrice": 94570.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:26.091000", "open": 94770.0, "close": 94770.0, "low": 94570.0, "high": 94800.0, "volume": 5.028350019827485, "split": "", "dividend": "", "curPrice": 94770.0, "prePrice": 94740.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:27.211000", "open": 94780.0, "close": 94740.0, "low": 94680.0, "high": 94780.0, "volume": 0.062429171055555344, "split": "", "dividend": "", "curPrice": 94740.0, "prePrice": 94770.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:28.015000", "open": 94750.0, "close": 94740.0, "low": 94740.0, "high": 94800.0, "volume": 6.577435500919819, "split": "", "dividend": "", "curPrice": 94740.0, "prePrice": 94740.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:29.166000", "open": 94740.0, "close": 94680.0, "low": 94680.0, "high": 94780.0, "volume": 30.772784581407905, "split": "", "dividend": "", "curPrice": 94680.0, "prePrice": 94740.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:30.050000", "open": 94740.0, "close": 94790.0, "low": 94680.0, "high": 94790.0, "volume": 1.0666299294680357, "split": "", "dividend": "", "curPrice": 94790.0, "prePrice": 94680.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:31.030000", "open": 94780.0, "close": 94780.0, "low": 94780.0, "high": 94800.0, "volume": 43.832314690575004, "split": "", "dividend": "", "curPrice": 94780.0, "prePrice": 94790.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:32.080000", "open": 94780.0, "close": 94780.0, "low": 94720.0, "high": 94790.0, "volume": 0.06442979909479618, "split": "", "dividend": "", "curPrice": 94780.0, "prePrice": 94780.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:33.023000", "open": 94790.0, "close": 94800.0, "low": 94740.0, "high": 94820.0, "volume": 0.06168442964553833, "split": "", "dividend": "", "curPrice": 94800.0, "prePrice": 94780.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:34.007000", "open": 94780.0, "close": 94780.0, "low": 94720.0, "high": 94850.0, "volume": 0.06122126989066601, "split": "", "dividend": "", "curPrice": 94780.0, "prePrice": 94800.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:35.077000", "open": 94800.0, "close": 94850.0, "low": 94800.0, "high": 94870.0, "volume": 0.4886241387575865, "split": "", "dividend": "", "curPrice": 94850.0, "prePrice": 94780.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:36.034000", "open": 94870.0, "close": 94850.0, "low": 94850.0, "high": 94880.0, "volume": 0.06096014007925987, "split": "", "dividend": "", "curPrice": 94850.0, "prePrice": 94850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:37.007000", "open": 94850.0, "close": 94880.0, "low": 94800.0, "high": 94880.0, "volume": 0.06128931976854801, "split": "", "dividend": "", "curPrice": 94880.0, "prePrice": 94850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:38.037000", "open": 94880.0, "close": 94820.0, "low": 94820.0, "high": 94880.0, "volume": 0.060851020738482475, "split": "", "dividend": "", "curPrice": 94820.0, "prePrice": 94880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:39.059000", "open": 94850.0, "close": 94880.0, "low": 94820.0, "high": 94880.0, "volume": 13.231840210035443, "split": "", "dividend": "", "curPrice": 94880.0, "prePrice": 94820.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:40.064000", "open": 94880.0, "close": 94850.0, "low": 94820.0, "high": 94890.0, "volume": 1.1826148591935635, "split": "", "dividend": "", "curPrice": 94850.0, "prePrice": 94880.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:41.021000", "open": 94890.0, "close": 94890.0, "low": 94880.0, "high": 94950.0, "volume": 1.9848666787147522, "split": "", "dividend": "", "curPrice": 94890.0, "prePrice": 94850.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:42.019000", "open": 94890.0, "close": 94970.0, "low": 94880.0, "high": 94970.0, "volume": 5.796735808253288, "split": "", "dividend": "", "curPrice": 94970.0, "prePrice": 94890.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:43.120000", "open": 94950.0, "close": 94950.0, "low": 94950.0, "high": 94970.0, "volume": 0.062313688918948174, "split": "", "dividend": "", "curPrice": 94950.0, "prePrice": 94970.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:44.021000", "open": 94950.0, "close": 94970.0, "low": 94950.0, "high": 94970.0, "volume": 0.060668809339404106, "split": "", "dividend": "", "curPrice": 94970.0, "prePrice": 94950.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:45.144000", "open": 94970.0, "close": 94970.0, "low": 94950.0, "high": 94990.0, "volume": 0.07570040039718151, "split": "", "dividend": "", "curPrice": 94970.0, "prePrice": 94970.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:46.090000", "open": 94970.0, "close": 94990.0, "low": 94970.0, "high": 95000.0, "volume": 3.1742672696709633, "split": "", "dividend": "", "curPrice": 94990.0, "prePrice": 94970.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:47.141000", "open": 94990.0, "close": 95000.0, "low": 94990.0, "high": 95000.0, "volume": 1.0521052610129118, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 94990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:48.239000", "open": 95000.0, "close": 94990.0, "low": 94990.0, "high": 95000.0, "volume": 0.0644022785127163, "split": "", "dividend": "", "curPrice": 94990.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:49.033000", "open": 94990.0, "close": 95000.0, "low": 94990.0, "high": 95000.0, "volume": 0.06263095885515213, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 94990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:50.070000", "open": 95000.0, "close": 95000.0, "low": 94990.0, "high": 95000.0, "volume": 74.39657172933221, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:51.003000", "open": 95000.0, "close": 95000.0, "low": 94990.0, "high": 95010.0, "volume": 8.748278489336371, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:52.123000", "open": 95000.0, "close": 94990.0, "low": 94990.0, "high": 95170.0, "volume": 0.060742830857634544, "split": "", "dividend": "", "curPrice": 94990.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:53.003000", "open": 95050.0, "close": 95000.0, "low": 94990.0, "high": 95050.0, "volume": 15.150466870516539, "split": "", "dividend": "", "curPrice": 95000.0, "prePrice": 94990.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:54.035000", "open": 95000.0, "close": 94970.0, "low": 94910.0, "high": 95200.0, "volume": 0.06125163100659847, "split": "", "dividend": "", "curPrice": 94970.0, "prePrice": 95000.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:55.032000", "open": 94950.0, "close": 94980.0, "low": 94870.0, "high": 94990.0, "volume": 21.205439070239663, "split": "", "dividend": "", "curPrice": 94980.0, "prePrice": 94970.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:56.010000", "open": 94960.0, "close": 94750.0, "low": 94680.0, "high": 94990.0, "volume": 4.864402310922742, "split": "", "dividend": "", "curPrice": 94750.0, "prePrice": 94980.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:57.078000", "open": 94850.0, "close": 94580.0, "low": 94580.0, "high": 94950.0, "volume": 2.4410231206566095, "split": "", "dividend": "", "curPrice": 94580.0, "prePrice": 94750.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:58.074000", "open": 94580.0, "close": 94560.0, "low": 94550.0, "high": 94880.0, "volume": 18.7516918387264, "split": "", "dividend": "", "curPrice": 94560.0, "prePrice": 94580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:23:59.015000", "open": 94570.0, "close": 94530.0, "low": 94510.0, "high": 94610.0, "volume": 37.81441164948046, "split": "", "dividend": "", "curPrice": 94530.0, "prePrice": 94560.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:24:00.048000", "open": 94510.0, "close": 94580.0, "low": 94510.0, "high": 94580.0, "volume": 0.06270488910377026, "split": "", "dividend": "", "curPrice": 94580.0, "prePrice": 94530.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},

{"date": "2021-04-12 19:24:01.046000", "open": 94570.0, "close": 94550.0, "low": 94550.0, "high": 94580.0, "volume": 0.06066847965121269, "split": "", "dividend": "", "curPrice": 94550.0, "prePrice": 94580.0, "priceUnit": 10, "volUnit": 100.0, "coinName": "스트라이크"},
]

hoka_list = [

{"date": "2021-04-12 19:17:00.511000", "total_ask_size": 13.20554939, "total_bid_size": 26.09754941, "ask_price": 94600.0, "bid_price": 94560.0},


{"date": "2021-04-12 19:17:02.069000", "total_ask_size": 12.24675443, "total_bid_size": 33.4500921, "ask_price": 94600.0, "bid_price": 94510.0},


{"date": "2021-04-12 19:17:02.415000", "total_ask_size": 11.50796816, "total_bid_size": 4.87811346, "ask_price": 94600.0, "bid_price": 94590.0},


{"date": "2021-04-12 19:17:03.638000", "total_ask_size": 275.83934103, "total_bid_size": 7.54381949, "ask_price": 94520.0, "bid_price": 94510.0},


{"date": "2021-04-12 19:17:04.674000", "total_ask_size": 42.02982625, "total_bid_size": 81.60700847, "ask_price": 94510.0, "bid_price": 94500.0},


{"date": "2021-04-12 19:17:05.377000", "total_ask_size": 386.97915225, "total_bid_size": 10.70872965, "ask_price": 94460.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:17:06.760000", "total_ask_size": 98.91959093, "total_bid_size": 25.86523407, "ask_price": 94450.0, "bid_price": 94410.0},


{"date": "2021-04-12 19:17:07.290000", "total_ask_size": 107.26284986, "total_bid_size": 21.17970983, "ask_price": 94450.0, "bid_price": 94430.0},


{"date": "2021-04-12 19:17:08.673000", "total_ask_size": 6.81384674, "total_bid_size": 20.42421256, "ask_price": 94370.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:17:09.552000", "total_ask_size": 14.2712219, "total_bid_size": 97.54769208, "ask_price": 94370.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:17:10.589000", "total_ask_size": 15.62327815, "total_bid_size": 56.56045949, "ask_price": 94370.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:17:11.802000", "total_ask_size": 68.29109799, "total_bid_size": 444.08041558, "ask_price": 94300.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:17:12.493000", "total_ask_size": 68.29109799, "total_bid_size": 5.89841905, "ask_price": 94300.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:17:13.537000", "total_ask_size": 491.69599476, "total_bid_size": 270.48809472, "ask_price": 94240.0, "bid_price": 94220.0},


{"date": "2021-04-12 19:17:14.567000", "total_ask_size": 57.52887536, "total_bid_size": 68.76990574, "ask_price": 94210.0, "bid_price": 94200.0},


{"date": "2021-04-12 19:17:15.439000", "total_ask_size": 23.29151316, "total_bid_size": 52.21693926, "ask_price": 94190.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:17:16.472000", "total_ask_size": 52.5661571, "total_bid_size": 4.1706325, "ask_price": 94190.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:17:17.344000", "total_ask_size": 220.80882022, "total_bid_size": 414.02558249, "ask_price": 94060.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:17:18.378000", "total_ask_size": 142.23635493, "total_bid_size": 34.10345657, "ask_price": 94060.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:17:19.595000", "total_ask_size": 250.20567979, "total_bid_size": 91.12162944, "ask_price": 94050.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:17:20.283000", "total_ask_size": 0.92314462, "total_bid_size": 148.2333605, "ask_price": 94030.0, "bid_price": 94020.0},


{"date": "2021-04-12 19:17:21.500000", "total_ask_size": 939.80114221, "total_bid_size": 7.04466306, "ask_price": 94050.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:17:22.709000", "total_ask_size": 7.48905397, "total_bid_size": 11.19819093, "ask_price": 93990.0, "bid_price": 93930.0},


{"date": "2021-04-12 19:17:23.407000", "total_ask_size": 3.9261875, "total_bid_size": 9.63573756, "ask_price": 94000.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:17:24.624000", "total_ask_size": 130.9276112, "total_bid_size": 19.97671504, "ask_price": 94000.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:17:25.668000", "total_ask_size": 162.42690293, "total_bid_size": 303.75754659, "ask_price": 94000.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:17:26.706000", "total_ask_size": 19.20468802, "total_bid_size": 312.83072537, "ask_price": 94030.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:17:27.741000", "total_ask_size": 25.61746817, "total_bid_size": 445.61346219, "ask_price": 94180.0, "bid_price": 94060.0},


{"date": "2021-04-12 19:17:28.520000", "total_ask_size": 21.08954939, "total_bid_size": 574.51475823, "ask_price": 94150.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:17:29.920000", "total_ask_size": 132.17678044, "total_bid_size": 336.36747133, "ask_price": 94280.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:17:30.657000", "total_ask_size": 262.99933317, "total_bid_size": 75.15143219, "ask_price": 94300.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:17:31.863000", "total_ask_size": 156.76941694, "total_bid_size": 104.40238644, "ask_price": 94300.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:17:32.558000", "total_ask_size": 153.59518578, "total_bid_size": 320.75603424, "ask_price": 94300.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:17:33.244000", "total_ask_size": 152.61146292, "total_bid_size": 300.13029465, "ask_price": 94300.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:17:34.463000", "total_ask_size": 47.19137793, "total_bid_size": 3.17998728, "ask_price": 94350.0, "bid_price": 94340.0},


{"date": "2021-04-12 19:17:35.493000", "total_ask_size": 62.91343815, "total_bid_size": 212.88814128, "ask_price": 94380.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:17:36.707000", "total_ask_size": 3.0, "total_bid_size": 548.51837162, "ask_price": 94370.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:17:37.920000", "total_ask_size": 177.16395535, "total_bid_size": 1.82560058, "ask_price": 94350.0, "bid_price": 94310.0},


{"date": "2021-04-12 19:17:38.618000", "total_ask_size": 185.27559843, "total_bid_size": 321.39942795, "ask_price": 94380.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:17:39.822000", "total_ask_size": 61.07930763, "total_bid_size": 380.38114348, "ask_price": 94380.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:17:40.863000", "total_ask_size": 9.47417664, "total_bid_size": 49.58930469, "ask_price": 94430.0, "bid_price": 94410.0},


{"date": "2021-04-12 19:17:41.730000", "total_ask_size": 1.1291274, "total_bid_size": 21.5891359, "ask_price": 94430.0, "bid_price": 94410.0},


{"date": "2021-04-12 19:17:42.768000", "total_ask_size": 10.14478921, "total_bid_size": 48.01140252, "ask_price": 94490.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:17:43.629000", "total_ask_size": 9.827698, "total_bid_size": 60.08955299, "ask_price": 94490.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:17:44.669000", "total_ask_size": 2.22215589, "total_bid_size": 25.85487151, "ask_price": 94480.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:17:45.534000", "total_ask_size": 12.2714234, "total_bid_size": 18.16187495, "ask_price": 94490.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:17:46.579000", "total_ask_size": 17.41240887, "total_bid_size": 761.1988439, "ask_price": 94450.0, "bid_price": 94410.0},


{"date": "2021-04-12 19:17:47.800000", "total_ask_size": 343.43155953, "total_bid_size": 3.63204619, "ask_price": 94470.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:17:48.836000", "total_ask_size": 113.91713673, "total_bid_size": 23.45033496, "ask_price": 94340.0, "bid_price": 94310.0},


{"date": "2021-04-12 19:17:49.707000", "total_ask_size": 96.78321344, "total_bid_size": 81.96827532, "ask_price": 94340.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:17:50.397000", "total_ask_size": 344.09725184, "total_bid_size": 1.2224842, "ask_price": 94290.0, "bid_price": 94270.0},


{"date": "2021-04-12 19:17:51.605000", "total_ask_size": 339.23045886, "total_bid_size": 27.36981643, "ask_price": 94290.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:17:52.641000", "total_ask_size": 54.0081468, "total_bid_size": 7.28778664, "ask_price": 94170.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:17:53.857000", "total_ask_size": 31.53072095, "total_bid_size": 26.94802112, "ask_price": 94170.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:17:54.544000", "total_ask_size": 31.2126548, "total_bid_size": 7.86223263, "ask_price": 94170.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:17:55.763000", "total_ask_size": 46.18314774, "total_bid_size": 197.8218556, "ask_price": 94170.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:17:56.455000", "total_ask_size": 206.97751103, "total_bid_size": 77.31393364, "ask_price": 94210.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:17:57.664000", "total_ask_size": 17.71409431, "total_bid_size": 81.43279768, "ask_price": 94100.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:17:58.700000", "total_ask_size": 13.40844454, "total_bid_size": 34.19224892, "ask_price": 94100.0, "bid_price": 94080.0},


{"date": "2021-04-12 19:17:59.922000", "total_ask_size": 0.42453832, "total_bid_size": 467.52741837, "ask_price": 94050.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:18:00.654000", "total_ask_size": 14.04413414, "total_bid_size": 599.12271638, "ask_price": 94130.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:18:01.774000", "total_ask_size": 235.33285613, "total_bid_size": 228.5038136, "ask_price": 94290.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:18:02.803000", "total_ask_size": 235.33285613, "total_bid_size": 524.53404786, "ask_price": 94290.0, "bid_price": 94230.0},


{"date": "2021-04-12 19:18:04.029000", "total_ask_size": 0.47450775, "total_bid_size": 472.17586244, "ask_price": 94270.0, "bid_price": 94230.0},


{"date": "2021-04-12 19:18:04.371000", "total_ask_size": 216.36254021, "total_bid_size": 327.67131814, "ask_price": 94290.0, "bid_price": 94230.0},


{"date": "2021-04-12 19:18:05.933000", "total_ask_size": 78.4869362, "total_bid_size": 397.55170117, "ask_price": 94230.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:18:06.620000", "total_ask_size": 0.7076344, "total_bid_size": 316.33036022, "ask_price": 94290.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:18:07.488000", "total_ask_size": 130.92979989, "total_bid_size": 1.25651459, "ask_price": 94300.0, "bid_price": 94220.0},


{"date": "2021-04-12 19:18:08.528000", "total_ask_size": 28.29606274, "total_bid_size": 18.58515801, "ask_price": 94290.0, "bid_price": 94260.0},


{"date": "2021-04-12 19:18:09.396000", "total_ask_size": 47.8710774, "total_bid_size": 70.07885229, "ask_price": 94290.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:18:10.431000", "total_ask_size": 17.16125557, "total_bid_size": 20.44390081, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:18:11.913000", "total_ask_size": 0.57868597, "total_bid_size": 48.713788, "ask_price": 94210.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:18:12.260000", "total_ask_size": 14.21302043, "total_bid_size": 8.16992806, "ask_price": 94180.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:18:13.824000", "total_ask_size": 254.50912467, "total_bid_size": 60.3757147, "ask_price": 94110.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:18:14.167000", "total_ask_size": 249.85754251, "total_bid_size": 60.3757147, "ask_price": 94110.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:18:15.740000", "total_ask_size": 10.86754747, "total_bid_size": 57.36401623, "ask_price": 94000.0, "bid_price": 93980.0},


{"date": "2021-04-12 19:18:16.428000", "total_ask_size": 2.3224782, "total_bid_size": 23.08231423, "ask_price": 94000.0, "bid_price": 93980.0},


{"date": "2021-04-12 19:18:17.645000", "total_ask_size": 28.00298143, "total_bid_size": 10.71039615, "ask_price": 93990.0, "bid_price": 93980.0},


{"date": "2021-04-12 19:18:18.859000", "total_ask_size": 15.63416999, "total_bid_size": 2.33249981, "ask_price": 93940.0, "bid_price": 93930.0},


{"date": "2021-04-12 19:18:19.555000", "total_ask_size": 10.00645146, "total_bid_size": 10.0374125, "ask_price": 93880.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:18:20.245000", "total_ask_size": 47.46892672, "total_bid_size": 106.13457864, "ask_price": 93880.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:18:20.770000", "total_ask_size": 132.00341256, "total_bid_size": 106.13457864, "ask_price": 93880.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:18:20.770000", "total_ask_size": 132.00341256, "total_bid_size": 106.13457864, "ask_price": 93880.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:18:21.467000", "total_ask_size": 132.73950289, "total_bid_size": 16.5388904, "ask_price": 93880.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:18:22.679000", "total_ask_size": 25.97733885, "total_bid_size": 0.28391785, "ask_price": 93870.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:18:23.377000", "total_ask_size": 30.89872774, "total_bid_size": 47.50346676, "ask_price": 93880.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:18:24.410000", "total_ask_size": 13.39119859, "total_bid_size": 48.17545167, "ask_price": 93830.0, "bid_price": 93810.0},


{"date": "2021-04-12 19:18:25.799000", "total_ask_size": 29.88422148, "total_bid_size": 13.77840194, "ask_price": 93870.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:18:26.668000", "total_ask_size": 0.32593264, "total_bid_size": 242.19558086, "ask_price": 93810.0, "bid_price": 93770.0},


{"date": "2021-04-12 19:18:27.707000", "total_ask_size": 215.50173315, "total_bid_size": 168.0039193, "ask_price": 93900.0, "bid_price": 93830.0},


{"date": "2021-04-12 19:18:28.572000", "total_ask_size": 165.18872637, "total_bid_size": 80.0, "ask_price": 93830.0, "bid_price": 93820.0},


{"date": "2021-04-12 19:18:29.621000", "total_ask_size": 28.4802003, "total_bid_size": 41.41859271, "ask_price": 93980.0, "bid_price": 93940.0},


{"date": "2021-04-12 19:18:30.877000", "total_ask_size": 377.52644233, "total_bid_size": 175.10865321, "ask_price": 94100.0, "bid_price": 93910.0},


{"date": "2021-04-12 19:18:31.222000", "total_ask_size": 366.15597475, "total_bid_size": 2.69805373, "ask_price": 94100.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:18:32.433000", "total_ask_size": 37.16667163, "total_bid_size": 30.49919258, "ask_price": 94100.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:18:33.470000", "total_ask_size": 283.25457265, "total_bid_size": 43.28358999, "ask_price": 94110.0, "bid_price": 94020.0},


{"date": "2021-04-12 19:18:34.687000", "total_ask_size": 137.03330671, "total_bid_size": 402.14116552, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:18:35.720000", "total_ask_size": 71.46701048, "total_bid_size": 107.75259542, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:18:36.593000", "total_ask_size": 136.39266325, "total_bid_size": 64.3864344, "ask_price": 94180.0, "bid_price": 94140.0},


{"date": "2021-04-12 19:18:37.625000", "total_ask_size": 94.55670934, "total_bid_size": 231.25830446, "ask_price": 94180.0, "bid_price": 94170.0},


{"date": "2021-04-12 19:18:38.845000", "total_ask_size": 205.76919361, "total_bid_size": 9.01812233, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:18:39.533000", "total_ask_size": 207.595153, "total_bid_size": 396.77957766, "ask_price": 94200.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:18:40.759000", "total_ask_size": 2.10172979, "total_bid_size": 124.84861627, "ask_price": 94140.0, "bid_price": 94110.0},


{"date": "2021-04-12 19:18:41.449000", "total_ask_size": 369.9493328, "total_bid_size": 64.11450193, "ask_price": 94110.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:18:43.018000", "total_ask_size": 239.38861727, "total_bid_size": 3.94583837, "ask_price": 94080.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:18:43.361000", "total_ask_size": 267.50127863, "total_bid_size": 84.3724182, "ask_price": 93940.0, "bid_price": 93910.0},


{"date": "2021-04-12 19:18:44.925000", "total_ask_size": 52.85946763, "total_bid_size": 12.05982319, "ask_price": 93940.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:18:45.616000", "total_ask_size": 3.41646733, "total_bid_size": 5.59763255, "ask_price": 93860.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:18:46.832000", "total_ask_size": 381.58278493, "total_bid_size": 36.90734585, "ask_price": 93910.0, "bid_price": 93830.0},


{"date": "2021-04-12 19:18:47.523000", "total_ask_size": 2.69835339, "total_bid_size": 3.88722459, "ask_price": 93820.0, "bid_price": 93810.0},


{"date": "2021-04-12 19:18:48.749000", "total_ask_size": 2.84268951, "total_bid_size": 38.8683423, "ask_price": 93810.0, "bid_price": 93800.0},


{"date": "2021-04-12 19:18:49.434000", "total_ask_size": 36.33983437, "total_bid_size": 361.64850685, "ask_price": 93830.0, "bid_price": 93820.0},


{"date": "2021-04-12 19:18:51.003000", "total_ask_size": 15.87096808, "total_bid_size": 53.87320504, "ask_price": 93830.0, "bid_price": 93790.0},


{"date": "2021-04-12 19:18:51.348000", "total_ask_size": 15.87096808, "total_bid_size": 29.61529254, "ask_price": 93830.0, "bid_price": 93820.0},


{"date": "2021-04-12 19:18:52.908000", "total_ask_size": 33.35021288, "total_bid_size": 108.33556437, "ask_price": 93890.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:18:52.908000", "total_ask_size": 33.35021288, "total_bid_size": 108.33556437, "ask_price": 93890.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:18:54.818000", "total_ask_size": 9.41572691, "total_bid_size": 129.39816736, "ask_price": 93930.0, "bid_price": 93910.0},


{"date": "2021-04-12 19:18:55.682000", "total_ask_size": 198.61409264, "total_bid_size": 0.31901318, "ask_price": 94060.0, "bid_price": 94040.0},


{"date": "2021-04-12 19:18:56.724000", "total_ask_size": 24.64627651, "total_bid_size": 122.17743086, "ask_price": 94020.0, "bid_price": 93990.0},


{"date": "2021-04-12 19:18:57.589000", "total_ask_size": 169.4985821, "total_bid_size": 230.84124816, "ask_price": 94060.0, "bid_price": 94020.0},


{"date": "2021-04-12 19:18:58.632000", "total_ask_size": 142.95966546, "total_bid_size": 119.3626088, "ask_price": 94060.0, "bid_price": 94020.0},


{"date": "2021-04-12 19:18:59.497000", "total_ask_size": 57.63401829, "total_bid_size": 46.58340938, "ask_price": 94060.0, "bid_price": 94020.0},


{"date": "2021-04-12 19:19:00.883000", "total_ask_size": 21.47644292, "total_bid_size": 17.51649696, "ask_price": 94060.0, "bid_price": 94040.0},


{"date": "2021-04-12 19:19:01.744000", "total_ask_size": 262.33013769, "total_bid_size": 14.32550731, "ask_price": 94100.0, "bid_price": 94080.0},


{"date": "2021-04-12 19:19:02.787000", "total_ask_size": 434.00337235, "total_bid_size": 6.8434536, "ask_price": 93990.0, "bid_price": 93930.0},


{"date": "2021-04-12 19:19:03.662000", "total_ask_size": 281.90484169, "total_bid_size": 1.66163884, "ask_price": 93990.0, "bid_price": 93920.0},


{"date": "2021-04-12 19:19:04.696000", "total_ask_size": 257.30165435, "total_bid_size": 47.89485541, "ask_price": 93990.0, "bid_price": 93890.0},


{"date": "2021-04-12 19:19:05.564000", "total_ask_size": 163.23796856, "total_bid_size": 177.17658439, "ask_price": 93950.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:19:06.607000", "total_ask_size": 4.83634436, "total_bid_size": 153.79726392, "ask_price": 93900.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:19:07.823000", "total_ask_size": 313.11139962, "total_bid_size": 125.78880331, "ask_price": 93790.0, "bid_price": 93770.0},


{"date": "2021-04-12 19:19:08.512000", "total_ask_size": 21.9428056, "total_bid_size": 88.76102955, "ask_price": 93880.0, "bid_price": 93790.0},


{"date": "2021-04-12 19:19:09.733000", "total_ask_size": 1.28870323, "total_bid_size": 37.2833399, "ask_price": 93910.0, "bid_price": 93790.0},


{"date": "2021-04-12 19:19:10.421000", "total_ask_size": 8.78881323, "total_bid_size": 38.70043396, "ask_price": 93850.0, "bid_price": 93720.0},


{"date": "2021-04-12 19:19:11.642000", "total_ask_size": 5.83311602, "total_bid_size": 15.11450862, "ask_price": 93850.0, "bid_price": 93810.0},


{"date": "2021-04-12 19:19:12.674000", "total_ask_size": 5.05494645, "total_bid_size": 70.2802722, "ask_price": 93980.0, "bid_price": 93940.0},


{"date": "2021-04-12 19:19:13.549000", "total_ask_size": 3.73039216, "total_bid_size": 238.85677806, "ask_price": 93990.0, "bid_price": 93940.0},


{"date": "2021-04-12 19:19:14.585000", "total_ask_size": 46.0986019, "total_bid_size": 52.48226972, "ask_price": 93900.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:19:15.462000", "total_ask_size": 12.99734061, "total_bid_size": 274.25661742, "ask_price": 94040.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:19:16.499000", "total_ask_size": 42.47501597, "total_bid_size": 149.30349156, "ask_price": 94080.0, "bid_price": 94040.0},


{"date": "2021-04-12 19:19:17.715000", "total_ask_size": 0.79559125, "total_bid_size": 17.67129341, "ask_price": 94060.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:19:18.061000", "total_ask_size": 41.41670293, "total_bid_size": 95.90636321, "ask_price": 94080.0, "bid_price": 94060.0},


{"date": "2021-04-12 19:19:19.969000", "total_ask_size": 40.7486573, "total_bid_size": 297.88414805, "ask_price": 94180.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:20.311000", "total_ask_size": 40.7486573, "total_bid_size": 293.88414805, "ask_price": 94180.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:21.532000", "total_ask_size": 218.27112527, "total_bid_size": 10.95001448, "ask_price": 94200.0, "bid_price": 94190.0},


{"date": "2021-04-12 19:19:22.221000", "total_ask_size": 12.44220299, "total_bid_size": 279.88799096, "ask_price": 94210.0, "bid_price": 94200.0},


{"date": "2021-04-12 19:19:23.789000", "total_ask_size": 22.01113784, "total_bid_size": 30.5123003, "ask_price": 94210.0, "bid_price": 94190.0},


{"date": "2021-04-12 19:19:24.654000", "total_ask_size": 321.38461401, "total_bid_size": 0.83880405, "ask_price": 94150.0, "bid_price": 94140.0},


{"date": "2021-04-12 19:19:25.700000", "total_ask_size": 246.55898411, "total_bid_size": 75.95505347, "ask_price": 94150.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:26.567000", "total_ask_size": 15.11450862, "total_bid_size": 58.65993412, "ask_price": 94120.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:27.608000", "total_ask_size": 121.49606138, "total_bid_size": 379.22108213, "ask_price": 94150.0, "bid_price": 94140.0},


{"date": "2021-04-12 19:19:28.476000", "total_ask_size": 343.29121869, "total_bid_size": 1.45060113, "ask_price": 94170.0, "bid_price": 94160.0},


{"date": "2021-04-12 19:19:29.519000", "total_ask_size": 11.96372619, "total_bid_size": 51.11841438, "ask_price": 94150.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:30.789000", "total_ask_size": 115.46168709, "total_bid_size": 51.11841438, "ask_price": 94140.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:31.479000", "total_ask_size": 93.41432771, "total_bid_size": 32.54539674, "ask_price": 94140.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:19:32.703000", "total_ask_size": 1.74189032, "total_bid_size": 280.05031975, "ask_price": 94160.0, "bid_price": 94150.0},


{"date": "2021-04-12 19:19:33.391000", "total_ask_size": 76.94680747, "total_bid_size": 141.1549775, "ask_price": 94170.0, "bid_price": 94150.0},


{"date": "2021-04-12 19:19:34.962000", "total_ask_size": 47.35913653, "total_bid_size": 55.57219167, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:19:35.309000", "total_ask_size": 47.35913653, "total_bid_size": 53.9686357, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:19:36.533000", "total_ask_size": 41.14152922, "total_bid_size": 37.79233599, "ask_price": 94220.0, "bid_price": 94200.0},


{"date": "2021-04-12 19:19:37.227000", "total_ask_size": 29.56865807, "total_bid_size": 35.53788125, "ask_price": 94230.0, "bid_price": 94220.0},


{"date": "2021-04-12 19:19:38.455000", "total_ask_size": 4.43091699, "total_bid_size": 429.79669756, "ask_price": 94290.0, "bid_price": 94260.0},


{"date": "2021-04-12 19:19:39.493000", "total_ask_size": 125.9054499, "total_bid_size": 436.48730484, "ask_price": 94330.0, "bid_price": 94260.0},


{"date": "2021-04-12 19:19:40.723000", "total_ask_size": 45.39737863, "total_bid_size": 19.76902879, "ask_price": 94370.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:19:41.414000", "total_ask_size": 6.82371822, "total_bid_size": 8.91749913, "ask_price": 94400.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:19:42.637000", "total_ask_size": 301.39692879, "total_bid_size": 28.81303108, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:19:43.323000", "total_ask_size": 336.08886935, "total_bid_size": 35.42800195, "ask_price": 94400.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:19:44.550000", "total_ask_size": 139.88635642, "total_bid_size": 28.86201791, "ask_price": 94410.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:19:45.589000", "total_ask_size": 73.95650662, "total_bid_size": 195.78059183, "ask_price": 94400.0, "bid_price": 94360.0},


{"date": "2021-04-12 19:19:46.640000", "total_ask_size": 100.08443153, "total_bid_size": 70.7120647, "ask_price": 94410.0, "bid_price": 94360.0},


{"date": "2021-04-12 19:19:47.437000", "total_ask_size": 10.66691579, "total_bid_size": 7.20075822, "ask_price": 94370.0, "bid_price": 94360.0},


{"date": "2021-04-12 19:19:48.491000", "total_ask_size": 5.61734997, "total_bid_size": 51.17678772, "ask_price": 94410.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:19:49.710000", "total_ask_size": 7.35296895, "total_bid_size": 117.62138254, "ask_price": 94410.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:19:50.409000", "total_ask_size": 142.98386732, "total_bid_size": 18.67944652, "ask_price": 94470.0, "bid_price": 94410.0},


{"date": "2021-04-12 19:19:51.630000", "total_ask_size": 47.95548538, "total_bid_size": 25.74042016, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:19:52.676000", "total_ask_size": 44.7254732, "total_bid_size": 6.13631922, "ask_price": 94470.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:19:53.552000", "total_ask_size": 241.54716745, "total_bid_size": 21.77022754, "ask_price": 94410.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:19:54.594000", "total_ask_size": 9.81565512, "total_bid_size": 12.94353352, "ask_price": 94450.0, "bid_price": 94410.0},


{"date": "2021-04-12 19:19:55.820000", "total_ask_size": 19.23082503, "total_bid_size": 31.58637132, "ask_price": 94460.0, "bid_price": 94430.0},


{"date": "2021-04-12 19:19:56.853000", "total_ask_size": 6.79401267, "total_bid_size": 50.10476489, "ask_price": 94480.0, "bid_price": 94470.0},


{"date": "2021-04-12 19:19:58.074000", "total_ask_size": 6.56559707, "total_bid_size": 679.86154943, "ask_price": 94580.0, "bid_price": 94550.0},


{"date": "2021-04-12 19:19:58.767000", "total_ask_size": 6.56559707, "total_bid_size": 568.25421875, "ask_price": 94580.0, "bid_price": 94550.0},


{"date": "2021-04-12 19:19:59.993000", "total_ask_size": 3.13661726, "total_bid_size": 6.5617334, "ask_price": 94650.0, "bid_price": 94610.0},


{"date": "2021-04-12 19:20:00.338000", "total_ask_size": 35.30100335, "total_bid_size": 60.38854581, "ask_price": 94670.0, "bid_price": 94610.0},


{"date": "2021-04-12 19:20:01.562000", "total_ask_size": 4.85823465, "total_bid_size": 31.23162452, "ask_price": 94660.0, "bid_price": 94650.0},


{"date": "2021-04-12 19:20:02.261000", "total_ask_size": 306.40504321, "total_bid_size": 196.79149407, "ask_price": 94730.0, "bid_price": 94670.0},


{"date": "2021-04-12 19:20:03.478000", "total_ask_size": 122.63902659, "total_bid_size": 5.25410544, "ask_price": 94730.0, "bid_price": 94690.0},


{"date": "2021-04-12 19:20:04.173000", "total_ask_size": 80.08721291, "total_bid_size": 2.18062355, "ask_price": 94730.0, "bid_price": 94670.0},


{"date": "2021-04-12 19:20:05.398000", "total_ask_size": 4.83019964, "total_bid_size": 0.88682009, "ask_price": 94620.0, "bid_price": 94610.0},


{"date": "2021-04-12 19:20:06.437000", "total_ask_size": 96.27777686, "total_bid_size": 2.02284375, "ask_price": 94650.0, "bid_price": 94610.0},


{"date": "2021-04-12 19:20:07.658000", "total_ask_size": 194.681769, "total_bid_size": 382.30248917, "ask_price": 94610.0, "bid_price": 94460.0},


{"date": "2021-04-12 19:20:08.693000", "total_ask_size": 22.35071019, "total_bid_size": 226.61263839, "ask_price": 94560.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:20:09.575000", "total_ask_size": 73.21183453, "total_bid_size": 6.89071678, "ask_price": 94550.0, "bid_price": 94470.0},


{"date": "2021-04-12 19:20:10.273000", "total_ask_size": 57.35314196, "total_bid_size": 28.8541655, "ask_price": 94550.0, "bid_price": 94500.0},


{"date": "2021-04-12 19:20:12.204000", "total_ask_size": 6.77342122, "total_bid_size": 7.28953791, "ask_price": 94470.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:12.547000", "total_ask_size": 34.72005179, "total_bid_size": 3.38983528, "ask_price": 94500.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:13.414000", "total_ask_size": 335.20910285, "total_bid_size": 220.98031145, "ask_price": 94400.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:20:14.450000", "total_ask_size": 259.49920839, "total_bid_size": 207.61236506, "ask_price": 94400.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:20:15.670000", "total_ask_size": 50.32281008, "total_bid_size": 3.93056379, "ask_price": 94370.0, "bid_price": 94360.0},


{"date": "2021-04-12 19:20:16.359000", "total_ask_size": 26.11527893, "total_bid_size": 27.58939193, "ask_price": 94350.0, "bid_price": 94280.0},


{"date": "2021-04-12 19:20:17.576000", "total_ask_size": 13.79119587, "total_bid_size": 6.71625045, "ask_price": 94260.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:20:18.608000", "total_ask_size": 462.58541746, "total_bid_size": 24.69537203, "ask_price": 94170.0, "bid_price": 94160.0},


{"date": "2021-04-12 19:20:19.657000", "total_ask_size": 44.37420314, "total_bid_size": 4.65897903, "ask_price": 94160.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:20:20.341000", "total_ask_size": 12.77869849, "total_bid_size": 53.59960361, "ask_price": 94200.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:20:21.909000", "total_ask_size": 40.79975122, "total_bid_size": 24.41846507, "ask_price": 94100.0, "bid_price": 94060.0},


{"date": "2021-04-12 19:20:22.779000", "total_ask_size": 26.47630418, "total_bid_size": 509.8513611, "ask_price": 94210.0, "bid_price": 94150.0},


{"date": "2021-04-12 19:20:23.473000", "total_ask_size": 16.59123891, "total_bid_size": 643.63554631, "ask_price": 94210.0, "bid_price": 94150.0},


{"date": "2021-04-12 19:20:25.035000", "total_ask_size": 4.42703078, "total_bid_size": 214.88340463, "ask_price": 94210.0, "bid_price": 94170.0},


{"date": "2021-04-12 19:20:25.386000", "total_ask_size": 2.01944718, "total_bid_size": 2.57638712, "ask_price": 94350.0, "bid_price": 94220.0},


{"date": "2021-04-12 19:20:26.940000", "total_ask_size": 45.97690193, "total_bid_size": 5.5954067, "ask_price": 94350.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:20:27.977000", "total_ask_size": 32.34252245, "total_bid_size": 279.48435188, "ask_price": 94400.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:20:28.844000", "total_ask_size": 239.94170394, "total_bid_size": 275.43572054, "ask_price": 94350.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:20:29.880000", "total_ask_size": 228.83583479, "total_bid_size": 0.34338678, "ask_price": 94350.0, "bid_price": 94310.0},


{"date": "2021-04-12 19:20:30.760000", "total_ask_size": 175.45326988, "total_bid_size": 223.32107079, "ask_price": 94350.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:20:31.796000", "total_ask_size": 2.49211645, "total_bid_size": 16.94345637, "ask_price": 94340.0, "bid_price": 94310.0},


{"date": "2021-04-12 19:20:33.017000", "total_ask_size": 26.28831551, "total_bid_size": 28.7048753, "ask_price": 94350.0, "bid_price": 94340.0},


{"date": "2021-04-12 19:20:33.363000", "total_ask_size": 26.28831551, "total_bid_size": 47.01330641, "ask_price": 94350.0, "bid_price": 94340.0},


{"date": "2021-04-12 19:20:34.574000", "total_ask_size": 22.98845097, "total_bid_size": 22.22650381, "ask_price": 94390.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:20:35.617000", "total_ask_size": 56.158073, "total_bid_size": 14.92070309, "ask_price": 94400.0, "bid_price": 94380.0},


{"date": "2021-04-12 19:20:36.831000", "total_ask_size": 16.95235608, "total_bid_size": 186.48238069, "ask_price": 94390.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:20:37.522000", "total_ask_size": 132.24178265, "total_bid_size": 60.41034699, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:20:38.727000", "total_ask_size": 149.50579746, "total_bid_size": 45.4962048, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:20:39.420000", "total_ask_size": 136.77818883, "total_bid_size": 291.86333437, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:20:40.627000", "total_ask_size": 124.02075626, "total_bid_size": 422.17455975, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:20:41.667000", "total_ask_size": 98.33218235, "total_bid_size": 407.75968878, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:20:42.535000", "total_ask_size": 33.23874423, "total_bid_size": 366.54659923, "ask_price": 94430.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:20:43.921000", "total_ask_size": 9.21102, "total_bid_size": 469.91874659, "ask_price": 94430.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:20:44.443000", "total_ask_size": 63.315675, "total_bid_size": 424.37272912, "ask_price": 94440.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:20:45.833000", "total_ask_size": 43.65188847, "total_bid_size": 12.27242961, "ask_price": 94440.0, "bid_price": 94430.0},


{"date": "2021-04-12 19:20:46.337000", "total_ask_size": 43.65188847, "total_bid_size": 22.08997167, "ask_price": 94440.0, "bid_price": 94430.0},


{"date": "2021-04-12 19:20:47.742000", "total_ask_size": 18.98429579, "total_bid_size": 84.41758271, "ask_price": 94470.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:48.954000", "total_ask_size": 18.98429579, "total_bid_size": 76.10568436, "ask_price": 94470.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:49.647000", "total_ask_size": 99.59104986, "total_bid_size": 188.15161224, "ask_price": 94490.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:50.512000", "total_ask_size": 93.35538711, "total_bid_size": 249.49770702, "ask_price": 94490.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:51.553000", "total_ask_size": 86.26257027, "total_bid_size": 78.42386344, "ask_price": 94490.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:52.413000", "total_ask_size": 86.26257027, "total_bid_size": 4.89769852, "ask_price": 94490.0, "bid_price": 94470.0},


{"date": "2021-04-12 19:20:53.459000", "total_ask_size": 45.42460203, "total_bid_size": 110.7403972, "ask_price": 94480.0, "bid_price": 94470.0},


{"date": "2021-04-12 19:20:54.668000", "total_ask_size": 136.77190275, "total_bid_size": 64.63905641, "ask_price": 94500.0, "bid_price": 94490.0},


{"date": "2021-04-12 19:20:55.713000", "total_ask_size": 132.96561494, "total_bid_size": 86.19487919, "ask_price": 94500.0, "bid_price": 94350.0},


{"date": "2021-04-12 19:20:56.935000", "total_ask_size": 49.47172144, "total_bid_size": 0.82485229, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:20:57.658000", "total_ask_size": 116.95325974, "total_bid_size": 277.76027503, "ask_price": 94450.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:20:58.570000", "total_ask_size": 4.15757404, "total_bid_size": 59.30284314, "ask_price": 94290.0, "bid_price": 94260.0},


{"date": "2021-04-12 19:20:59.615000", "total_ask_size": 322.38531538, "total_bid_size": 91.18234512, "ask_price": 94300.0, "bid_price": 94150.0},


{"date": "2021-04-12 19:21:00.827000", "total_ask_size": 127.65351555, "total_bid_size": 52.05996944, "ask_price": 94020.0, "bid_price": 94010.0},


{"date": "2021-04-12 19:21:01.863000", "total_ask_size": 52.95057292, "total_bid_size": 108.78936768, "ask_price": 94020.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:21:03.093000", "total_ask_size": 8.34484785, "total_bid_size": 10.71635019, "ask_price": 94010.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:21:03.440000", "total_ask_size": 6.34484785, "total_bid_size": 2.50667969, "ask_price": 94010.0, "bid_price": 93940.0},


{"date": "2021-04-12 19:21:04.662000", "total_ask_size": 32.11973436, "total_bid_size": 22.02504751, "ask_price": 93900.0, "bid_price": 93850.0},


{"date": "2021-04-12 19:21:05.701000", "total_ask_size": 123.82115382, "total_bid_size": 19.57558463, "ask_price": 93900.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:21:06.572000", "total_ask_size": 123.82115382, "total_bid_size": 168.70638229, "ask_price": 93900.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:21:07.614000", "total_ask_size": 99.19848935, "total_bid_size": 61.64958693, "ask_price": 93900.0, "bid_price": 93760.0},


{"date": "2021-04-12 19:21:08.486000", "total_ask_size": 2.83856838, "total_bid_size": 19.08809766, "ask_price": 93780.0, "bid_price": 93760.0},


{"date": "2021-04-12 19:21:09.531000", "total_ask_size": 0.0917821, "total_bid_size": 5.90723547, "ask_price": 93800.0, "bid_price": 93720.0},


{"date": "2021-04-12 19:21:10.746000", "total_ask_size": 31.59039427, "total_bid_size": 0.38656848, "ask_price": 93730.0, "bid_price": 93690.0},


{"date": "2021-04-12 19:21:11.435000", "total_ask_size": 6.49429279, "total_bid_size": 149.94117953, "ask_price": 93730.0, "bid_price": 93700.0},


{"date": "2021-04-12 19:21:12.658000", "total_ask_size": 0.94360734, "total_bid_size": 85.14848421, "ask_price": 93620.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:21:13.701000", "total_ask_size": 33.22697687, "total_bid_size": 0.05629926, "ask_price": 93650.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:14.581000", "total_ask_size": 131.28174327, "total_bid_size": 87.84088416, "ask_price": 93700.0, "bid_price": 93680.0},


{"date": "2021-04-12 19:21:15.616000", "total_ask_size": 125.42916955, "total_bid_size": 85.67583414, "ask_price": 93700.0, "bid_price": 93680.0},


{"date": "2021-04-12 19:21:16.488000", "total_ask_size": 88.28720006, "total_bid_size": 102.33651096, "ask_price": 93700.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:17.533000", "total_ask_size": 180.60793944, "total_bid_size": 67.50748265, "ask_price": 93680.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:18.752000", "total_ask_size": 29.81483902, "total_bid_size": 20.25157403, "ask_price": 93620.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:21:19.442000", "total_ask_size": 6.00674506, "total_bid_size": 3.62710943, "ask_price": 93610.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:21:20.666000", "total_ask_size": 129.99071463, "total_bid_size": 88.50817848, "ask_price": 93680.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:21.357000", "total_ask_size": 20.92020857, "total_bid_size": 0.05465618, "ask_price": 93550.0, "bid_price": 93530.0},


{"date": "2021-04-12 19:21:22.578000", "total_ask_size": 6.26536868, "total_bid_size": 1.11038598, "ask_price": 93530.0, "bid_price": 93500.0},


{"date": "2021-04-12 19:21:23.621000", "total_ask_size": 45.72802701, "total_bid_size": 80.27959057, "ask_price": 93480.0, "bid_price": 93460.0},


{"date": "2021-04-12 19:21:24.834000", "total_ask_size": 1.13997758, "total_bid_size": 174.21706452, "ask_price": 93450.0, "bid_price": 93330.0},


{"date": "2021-04-12 19:21:25.523000", "total_ask_size": 28.88939319, "total_bid_size": 4.22911584, "ask_price": 93490.0, "bid_price": 93450.0},


{"date": "2021-04-12 19:21:26.743000", "total_ask_size": 44.86354217, "total_bid_size": 167.05951265, "ask_price": 93490.0, "bid_price": 93460.0},


{"date": "2021-04-12 19:21:27.430000", "total_ask_size": 8.00958421, "total_bid_size": 53.08749496, "ask_price": 93410.0, "bid_price": 93340.0},


{"date": "2021-04-12 19:21:28.649000", "total_ask_size": 117.1866203, "total_bid_size": 193.77138233, "ask_price": 93370.0, "bid_price": 93340.0},


{"date": "2021-04-12 19:21:29.335000", "total_ask_size": 120.44808183, "total_bid_size": 478.47492341, "ask_price": 93410.0, "bid_price": 93400.0},


{"date": "2021-04-12 19:21:30.557000", "total_ask_size": 38.11317256, "total_bid_size": 180.24989767, "ask_price": 93410.0, "bid_price": 93400.0},


{"date": "2021-04-12 19:21:31.773000", "total_ask_size": 93.47640856, "total_bid_size": 34.95102186, "ask_price": 93680.0, "bid_price": 93490.0},


{"date": "2021-04-12 19:21:32.468000", "total_ask_size": 43.2220848, "total_bid_size": 46.40510509, "ask_price": 93680.0, "bid_price": 93610.0},


{"date": "2021-04-12 19:21:33.690000", "total_ask_size": 28.04666337, "total_bid_size": 292.67660422, "ask_price": 93680.0, "bid_price": 93580.0},


{"date": "2021-04-12 19:21:34.722000", "total_ask_size": 8.09253219, "total_bid_size": 1.01671314, "ask_price": 93650.0, "bid_price": 93610.0},


{"date": "2021-04-12 19:21:35.596000", "total_ask_size": 46.16014375, "total_bid_size": 10.28089885, "ask_price": 93770.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:36.632000", "total_ask_size": 43.3178539, "total_bid_size": 15.48772775, "ask_price": 93770.0, "bid_price": 93690.0},


{"date": "2021-04-12 19:21:37.507000", "total_ask_size": 61.42245479, "total_bid_size": 11.68210659, "ask_price": 93810.0, "bid_price": 93690.0},


{"date": "2021-04-12 19:21:38.541000", "total_ask_size": 5.69581128, "total_bid_size": 67.49417611, "ask_price": 93710.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:39.409000", "total_ask_size": 15.79111942, "total_bid_size": 3.99895596, "ask_price": 93710.0, "bid_price": 93690.0},


{"date": "2021-04-12 19:21:40.903000", "total_ask_size": 227.18816539, "total_bid_size": 357.32119268, "ask_price": 93770.0, "bid_price": 93620.0},


{"date": "2021-04-12 19:21:41.613000", "total_ask_size": 20.92232174, "total_bid_size": 544.8753177, "ask_price": 93710.0, "bid_price": 93640.0},


{"date": "2021-04-12 19:21:42.299000", "total_ask_size": 194.01664613, "total_bid_size": 15.06313835, "ask_price": 93770.0, "bid_price": 93690.0},


{"date": "2021-04-12 19:21:43.518000", "total_ask_size": 193.40733002, "total_bid_size": 0.79625974, "ask_price": 93770.0, "bid_price": 93750.0},


{"date": "2021-04-12 19:21:45.085000", "total_ask_size": 4.59022419, "total_bid_size": 184.13865161, "ask_price": 93840.0, "bid_price": 93710.0},


{"date": "2021-04-12 19:21:45.778000", "total_ask_size": 0.43922589, "total_bid_size": 4.01701877, "ask_price": 93730.0, "bid_price": 93720.0},


{"date": "2021-04-12 19:21:46.989000", "total_ask_size": 46.23312145, "total_bid_size": 114.1509353, "ask_price": 93890.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:21:47.682000", "total_ask_size": 40.13141631, "total_bid_size": 67.94283203, "ask_price": 93890.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:21:48.895000", "total_ask_size": 46.21003547, "total_bid_size": 159.84728324, "ask_price": 93870.0, "bid_price": 93740.0},


{"date": "2021-04-12 19:21:49.591000", "total_ask_size": 32.08432467, "total_bid_size": 69.9709142, "ask_price": 93890.0, "bid_price": 93870.0},


{"date": "2021-04-12 19:21:50.275000", "total_ask_size": 58.87976, "total_bid_size": 152.67709399, "ask_price": 93890.0, "bid_price": 93840.0},


{"date": "2021-04-12 19:21:51.495000", "total_ask_size": 4.93838166, "total_bid_size": 63.77663296, "ask_price": 93870.0, "bid_price": 93840.0},


{"date": "2021-04-12 19:21:52.702000", "total_ask_size": 447.64566129, "total_bid_size": 50.04890953, "ask_price": 93870.0, "bid_price": 93840.0},


{"date": "2021-04-12 19:21:53.750000", "total_ask_size": 28.61151861, "total_bid_size": 10.24736644, "ask_price": 93840.0, "bid_price": 93770.0},


{"date": "2021-04-12 19:21:54.616000", "total_ask_size": 40.07919195, "total_bid_size": 168.04347751, "ask_price": 93820.0, "bid_price": 93710.0},


{"date": "2021-04-12 19:21:55.662000", "total_ask_size": 28.25162373, "total_bid_size": 172.66312808, "ask_price": 93820.0, "bid_price": 93770.0},


{"date": "2021-04-12 19:21:56.520000", "total_ask_size": 71.21113835, "total_bid_size": 120.04380957, "ask_price": 93810.0, "bid_price": 93770.0},


{"date": "2021-04-12 19:21:57.563000", "total_ask_size": 66.43785335, "total_bid_size": 7.69828104, "ask_price": 93810.0, "bid_price": 93770.0},


{"date": "2021-04-12 19:21:58.775000", "total_ask_size": 303.08912668, "total_bid_size": 20.47889783, "ask_price": 93610.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:22:00.331000", "total_ask_size": 234.39060078, "total_bid_size": 6.13550627, "ask_price": 93610.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:22:00.684000", "total_ask_size": 233.21549888, "total_bid_size": 13.69374176, "ask_price": 93610.0, "bid_price": 93580.0},


{"date": "2021-04-12 19:22:01.716000", "total_ask_size": 20.59950925, "total_bid_size": 48.08532229, "ask_price": 93520.0, "bid_price": 93510.0},


{"date": "2021-04-12 19:22:02.542000", "total_ask_size": 37.24602256, "total_bid_size": 44.36564917, "ask_price": 93600.0, "bid_price": 93510.0},


{"date": "2021-04-12 19:22:03.576000", "total_ask_size": 32.40992743, "total_bid_size": 56.91813309, "ask_price": 93600.0, "bid_price": 93500.0},


{"date": "2021-04-12 19:22:04.442000", "total_ask_size": 30.89942683, "total_bid_size": 71.84166369, "ask_price": 93640.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:22:05.478000", "total_ask_size": 37.65998187, "total_bid_size": 135.89448959, "ask_price": 93600.0, "bid_price": 93510.0},


{"date": "2021-04-12 19:22:06.695000", "total_ask_size": 2.9327932, "total_bid_size": 164.69729201, "ask_price": 93650.0, "bid_price": 93640.0},


{"date": "2021-04-12 19:22:07.383000", "total_ask_size": 0.30737156, "total_bid_size": 4.31632862, "ask_price": 93640.0, "bid_price": 93600.0},


{"date": "2021-04-12 19:22:08.604000", "total_ask_size": 1.30665026, "total_bid_size": 316.55883235, "ask_price": 93640.0, "bid_price": 93450.0},


{"date": "2021-04-12 19:22:09.806000", "total_ask_size": 10.68376069, "total_bid_size": 11.60594474, "ask_price": 93580.0, "bid_price": 93550.0},


{"date": "2021-04-12 19:22:10.507000", "total_ask_size": 8.93810327, "total_bid_size": 54.41174239, "ask_price": 93580.0, "bid_price": 93560.0},


{"date": "2021-04-12 19:22:11.537000", "total_ask_size": 5.97893318, "total_bid_size": 42.76235288, "ask_price": 93580.0, "bid_price": 93550.0},


{"date": "2021-04-12 19:22:12.750000", "total_ask_size": 51.61191, "total_bid_size": 0.60671803, "ask_price": 93580.0, "bid_price": 93570.0},


{"date": "2021-04-12 19:22:13.440000", "total_ask_size": 43.39024194, "total_bid_size": 4.62185863, "ask_price": 93550.0, "bid_price": 93520.0},


{"date": "2021-04-12 19:22:14.657000", "total_ask_size": 58.04200541, "total_bid_size": 179.00465014, "ask_price": 93580.0, "bid_price": 93550.0},


{"date": "2021-04-12 19:22:15.343000", "total_ask_size": 109.32778904, "total_bid_size": 151.70831835, "ask_price": 93580.0, "bid_price": 93550.0},


{"date": "2021-04-12 19:22:16.561000", "total_ask_size": 22.56355848, "total_bid_size": 59.823973, "ask_price": 93710.0, "bid_price": 93630.0},


{"date": "2021-04-12 19:22:17.248000", "total_ask_size": 22.44211114, "total_bid_size": 38.3565965, "ask_price": 93710.0, "bid_price": 93640.0},


{"date": "2021-04-12 19:22:18.807000", "total_ask_size": 189.7626763, "total_bid_size": 338.28266466, "ask_price": 93760.0, "bid_price": 93710.0},


{"date": "2021-04-12 19:22:19.669000", "total_ask_size": 7.15460791, "total_bid_size": 106.67796735, "ask_price": 93770.0, "bid_price": 93760.0},


{"date": "2021-04-12 19:22:20.711000", "total_ask_size": 2.55985094, "total_bid_size": 0.47242036, "ask_price": 93800.0, "bid_price": 93790.0},


{"date": "2021-04-12 19:22:21.578000", "total_ask_size": 30.12009073, "total_bid_size": 17.75768119, "ask_price": 93830.0, "bid_price": 93780.0},


{"date": "2021-04-12 19:22:22.622000", "total_ask_size": 214.86579875, "total_bid_size": 10.48091199, "ask_price": 93840.0, "bid_price": 93820.0},


{"date": "2021-04-12 19:22:23.839000", "total_ask_size": 19.28153817, "total_bid_size": 240.44153463, "ask_price": 93880.0, "bid_price": 93860.0},


{"date": "2021-04-12 19:22:24.533000", "total_ask_size": 12.98816266, "total_bid_size": 228.73685387, "ask_price": 93880.0, "bid_price": 93860.0},


{"date": "2021-04-12 19:22:25.580000", "total_ask_size": 94.32682442, "total_bid_size": 22.4314679, "ask_price": 93890.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:26.612000", "total_ask_size": 61.32363508, "total_bid_size": 74.03401592, "ask_price": 93900.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:27.828000", "total_ask_size": 114.71407528, "total_bid_size": 77.40481386, "ask_price": 93950.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:28.518000", "total_ask_size": 0.07909045, "total_bid_size": 243.41258761, "ask_price": 93890.0, "bid_price": 93860.0},


{"date": "2021-04-12 19:22:30.074000", "total_ask_size": 65.15725622, "total_bid_size": 5.8551461, "ask_price": 94000.0, "bid_price": 93950.0},


{"date": "2021-04-12 19:22:30.871000", "total_ask_size": 24.62724652, "total_bid_size": 99.58202928, "ask_price": 94000.0, "bid_price": 93890.0},


{"date": "2021-04-12 19:22:31.581000", "total_ask_size": 0.79795662, "total_bid_size": 95.7516614, "ask_price": 94050.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:22:32.613000", "total_ask_size": 45.50440673, "total_bid_size": 65.29046156, "ask_price": 94130.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:22:33.833000", "total_ask_size": 22.92179707, "total_bid_size": 61.76811615, "ask_price": 94130.0, "bid_price": 94020.0},


{"date": "2021-04-12 19:22:34.523000", "total_ask_size": 16.8716396, "total_bid_size": 19.37933091, "ask_price": 94270.0, "bid_price": 94130.0},


{"date": "2021-04-12 19:22:35.743000", "total_ask_size": 323.67926332, "total_bid_size": 5.50140844, "ask_price": 94200.0, "bid_price": 94130.0},


{"date": "2021-04-12 19:22:36.431000", "total_ask_size": 273.54654778, "total_bid_size": 26.63304611, "ask_price": 94200.0, "bid_price": 94130.0},


{"date": "2021-04-12 19:22:37.653000", "total_ask_size": 9.57654219, "total_bid_size": 133.45090995, "ask_price": 94100.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:22:38.862000", "total_ask_size": 1.20224554, "total_bid_size": 7.48930066, "ask_price": 93900.0, "bid_price": 93890.0},


{"date": "2021-04-12 19:22:39.899000", "total_ask_size": 59.73477735, "total_bid_size": 81.38549498, "ask_price": 94020.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:40.762000", "total_ask_size": 30.17166742, "total_bid_size": 7.47751794, "ask_price": 94020.0, "bid_price": 93780.0},


{"date": "2021-04-12 19:22:41.804000", "total_ask_size": 149.28820434, "total_bid_size": 20.47949422, "ask_price": 94000.0, "bid_price": 93910.0},


{"date": "2021-04-12 19:22:42.663000", "total_ask_size": 81.0195955, "total_bid_size": 66.2138243, "ask_price": 94000.0, "bid_price": 93820.0},


{"date": "2021-04-12 19:22:43.705000", "total_ask_size": 0.54329742, "total_bid_size": 65.23946631, "ask_price": 93840.0, "bid_price": 93820.0},


{"date": "2021-04-12 19:22:44.566000", "total_ask_size": 0.28012311, "total_bid_size": 690.0068583, "ask_price": 93990.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:45.621000", "total_ask_size": 8.80884832, "total_bid_size": 639.3098429, "ask_price": 93950.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:46.831000", "total_ask_size": 0.23898682, "total_bid_size": 635.01439198, "ask_price": 93950.0, "bid_price": 93880.0},


{"date": "2021-04-12 19:22:47.520000", "total_ask_size": 178.55403546, "total_bid_size": 9.73871941, "ask_price": 94020.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:22:48.728000", "total_ask_size": 32.0440377, "total_bid_size": 359.38732156, "ask_price": 93960.0, "bid_price": 93950.0},


{"date": "2021-04-12 19:22:49.763000", "total_ask_size": 23.92291255, "total_bid_size": 280.93839018, "ask_price": 94050.0, "bid_price": 94000.0},


{"date": "2021-04-12 19:22:50.632000", "total_ask_size": 38.02581607, "total_bid_size": 2.36965119, "ask_price": 93980.0, "bid_price": 93960.0},


{"date": "2021-04-12 19:22:51.671000", "total_ask_size": 39.83495687, "total_bid_size": 482.1094327, "ask_price": 94070.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:22:52.537000", "total_ask_size": 16.93230572, "total_bid_size": 649.40689636, "ask_price": 94090.0, "bid_price": 94050.0},


{"date": "2021-04-12 19:22:53.576000", "total_ask_size": 10.96448404, "total_bid_size": 48.452209, "ask_price": 94090.0, "bid_price": 94070.0},


{"date": "2021-04-12 19:22:54.438000", "total_ask_size": 129.11690854, "total_bid_size": 104.24333161, "ask_price": 94110.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:22:55.484000", "total_ask_size": 132.48366914, "total_bid_size": 34.8807343, "ask_price": 94110.0, "bid_price": 94090.0},


{"date": "2021-04-12 19:22:56.695000", "total_ask_size": 7.83335923, "total_bid_size": 34.8807343, "ask_price": 94100.0, "bid_price": 94090.0},


{"date": "2021-04-12 19:22:57.384000", "total_ask_size": 9.6280597, "total_bid_size": 25.99568356, "ask_price": 94110.0, "bid_price": 94100.0},


{"date": "2021-04-12 19:22:58.593000", "total_ask_size": 2.45171881, "total_bid_size": 36.14560261, "ask_price": 94140.0, "bid_price": 94130.0},


{"date": "2021-04-12 19:22:59.631000", "total_ask_size": 44.46540289, "total_bid_size": 0.53101104, "ask_price": 94170.0, "bid_price": 94160.0},


{"date": "2021-04-12 19:23:01.097000", "total_ask_size": 3.5018605, "total_bid_size": 113.7375747, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:23:01.440000", "total_ask_size": 9.50249362, "total_bid_size": 81.97347259, "ask_price": 94200.0, "bid_price": 94180.0},


{"date": "2021-04-12 19:23:02.650000", "total_ask_size": 18.30049024, "total_bid_size": 186.34374566, "ask_price": 94240.0, "bid_price": 94200.0},


{"date": "2021-04-12 19:23:03.681000", "total_ask_size": 26.12785244, "total_bid_size": 53.87213342, "ask_price": 94300.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:23:04.556000", "total_ask_size": 24.01626165, "total_bid_size": 37.92715065, "ask_price": 94300.0, "bid_price": 94210.0},


{"date": "2021-04-12 19:23:05.590000", "total_ask_size": 19.23638864, "total_bid_size": 986.34793277, "ask_price": 94350.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:23:06.809000", "total_ask_size": 109.30506725, "total_bid_size": 852.7699227, "ask_price": 94460.0, "bid_price": 94300.0},


{"date": "2021-04-12 19:23:07.497000", "total_ask_size": 0.40817064, "total_bid_size": 6.46691151, "ask_price": 94410.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:23:08.713000", "total_ask_size": 17.08497338, "total_bid_size": 8.55543641, "ask_price": 94460.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:23:09.929000", "total_ask_size": 18.25869453, "total_bid_size": 19.53137877, "ask_price": 94400.0, "bid_price": 94390.0},


{"date": "2021-04-12 19:23:10.973000", "total_ask_size": 118.86455412, "total_bid_size": 14.45454621, "ask_price": 94460.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:23:11.837000", "total_ask_size": 112.27135497, "total_bid_size": 1.08656237, "ask_price": 94460.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:23:12.887000", "total_ask_size": 106.58925902, "total_bid_size": 4.03583166, "ask_price": 94460.0, "bid_price": 94400.0},


{"date": "2021-04-12 19:23:13.749000", "total_ask_size": 64.00491935, "total_bid_size": 9.36444387, "ask_price": 94470.0, "bid_price": 94460.0},


{"date": "2021-04-12 19:23:14.792000", "total_ask_size": 20.20401403, "total_bid_size": 4.14686482, "ask_price": 94470.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:23:15.652000", "total_ask_size": 9.91527314, "total_bid_size": 34.41292773, "ask_price": 94470.0, "bid_price": 94460.0},


{"date": "2021-04-12 19:23:16.692000", "total_ask_size": 87.19803064, "total_bid_size": 0.4423121, "ask_price": 94460.0, "bid_price": 94450.0},


{"date": "2021-04-12 19:23:17.034000", "total_ask_size": 33.08250474, "total_bid_size": 403.86052361, "ask_price": 94450.0, "bid_price": 94440.0},


{"date": "2021-04-12 19:23:18.599000", "total_ask_size": 248.41686501, "total_bid_size": 15.89066964, "ask_price": 94500.0, "bid_price": 94460.0},


{"date": "2021-04-12 19:23:19.813000", "total_ask_size": 102.89087968, "total_bid_size": 105.79588295, "ask_price": 94510.0, "bid_price": 94500.0},


{"date": "2021-04-12 19:23:20.507000", "total_ask_size": 7.1268222, "total_bid_size": 141.63148145, "ask_price": 94770.0, "bid_price": 94500.0},


{"date": "2021-04-12 19:23:21.717000", "total_ask_size": 24.7787846, "total_bid_size": 99.936166, "ask_price": 94570.0, "bid_price": 94540.0},


{"date": "2021-04-12 19:23:22.408000", "total_ask_size": 21.54268484, "total_bid_size": 88.04694614, "ask_price": 94570.0, "bid_price": 94540.0},


{"date": "2021-04-12 19:23:23.504000", "total_ask_size": 4.27278672, "total_bid_size": 108.04150525, "ask_price": 94610.0, "bid_price": 94570.0},


{"date": "2021-04-12 19:23:24.550000", "total_ask_size": 0.4083952, "total_bid_size": 253.26076173, "ask_price": 94680.0, "bid_price": 94570.0},


{"date": "2021-04-12 19:23:25.419000", "total_ask_size": 82.46288067, "total_bid_size": 15.7587688, "ask_price": 94780.0, "bid_price": 94770.0},


{"date": "2021-04-12 19:23:26.460000", "total_ask_size": 285.69060366, "total_bid_size": 65.45296301, "ask_price": 94750.0, "bid_price": 94740.0},


{"date": "2021-04-12 19:23:27.677000", "total_ask_size": 36.4713693, "total_bid_size": 20.3412352, "ask_price": 94780.0, "bid_price": 94740.0},


{"date": "2021-04-12 19:23:28.367000", "total_ask_size": 9.42862219, "total_bid_size": 40.04097219, "ask_price": 94780.0, "bid_price": 94750.0},


{"date": "2021-04-12 19:23:29.577000", "total_ask_size": 2.91423098, "total_bid_size": 17.54808507, "ask_price": 94790.0, "bid_price": 94780.0},


{"date": "2021-04-12 19:23:30.827000", "total_ask_size": 202.5531179, "total_bid_size": 37.96177697, "ask_price": 94750.0, "bid_price": 94740.0},


{"date": "2021-04-12 19:23:31.871000", "total_ask_size": 0.56054746, "total_bid_size": 187.66406854, "ask_price": 94780.0, "bid_price": 94740.0},


{"date": "2021-04-12 19:23:32.739000", "total_ask_size": 52.03627945, "total_bid_size": 9.47540894, "ask_price": 94850.0, "bid_price": 94780.0},


{"date": "2021-04-12 19:23:33.783000", "total_ask_size": 31.46354537, "total_bid_size": 56.85073218, "ask_price": 94820.0, "bid_price": 94800.0},


{"date": "2021-04-12 19:23:34.650000", "total_ask_size": 76.51759934, "total_bid_size": 28.35977935, "ask_price": 94870.0, "bid_price": 94850.0},


{"date": "2021-04-12 19:23:35.714000", "total_ask_size": 412.0556412, "total_bid_size": 57.02839683, "ask_price": 94880.0, "bid_price": 94850.0},


{"date": "2021-04-12 19:23:36.580000", "total_ask_size": 133.48500261, "total_bid_size": 550.23800106, "ask_price": 94850.0, "bid_price": 94820.0},


{"date": "2021-04-12 19:23:37.627000", "total_ask_size": 121.86583524, "total_bid_size": 518.53832247, "ask_price": 94880.0, "bid_price": 94820.0},


{"date": "2021-04-12 19:23:38.839000", "total_ask_size": 32.23424927, "total_bid_size": 8.09191523, "ask_price": 94850.0, "bid_price": 94830.0},


{"date": "2021-04-12 19:23:39.533000", "total_ask_size": 107.44469621, "total_bid_size": 56.45927663, "ask_price": 94890.0, "bid_price": 94880.0},


{"date": "2021-04-12 19:23:40.744000", "total_ask_size": 22.17186459, "total_bid_size": 4.15375835, "ask_price": 94950.0, "bid_price": 94910.0},


{"date": "2021-04-12 19:23:41.437000", "total_ask_size": 236.98389082, "total_bid_size": 7.85054218, "ask_price": 94970.0, "bid_price": 94900.0},


{"date": "2021-04-12 19:23:42.655000", "total_ask_size": 152.59939715, "total_bid_size": 34.38611274, "ask_price": 94970.0, "bid_price": 94950.0},


{"date": "2021-04-12 19:23:43.348000", "total_ask_size": 58.4555388, "total_bid_size": 4.91467603, "ask_price": 94970.0, "bid_price": 94960.0},


{"date": "2021-04-12 19:23:44.915000", "total_ask_size": 104.08722585, "total_bid_size": 111.48074762, "ask_price": 94990.0, "bid_price": 94970.0},


{"date": "2021-04-12 19:23:45.616000", "total_ask_size": 1911.44630068, "total_bid_size": 36.00377118, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:46.838000", "total_ask_size": 1836.30901811, "total_bid_size": 577.96732009, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:47.530000", "total_ask_size": 1037.65879383, "total_bid_size": 564.37437171, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:48.743000", "total_ask_size": 475.86640063, "total_bid_size": 439.44703943, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:49.436000", "total_ask_size": 458.04611542, "total_bid_size": 413.16740735, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:50.652000", "total_ask_size": 3.0875236, "total_bid_size": 26.87900492, "ask_price": 95010.0, "bid_price": 95000.0},


{"date": "2021-04-12 19:23:51.858000", "total_ask_size": 920.69857384, "total_bid_size": 184.69565425, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:52.558000", "total_ask_size": 801.54364483, "total_bid_size": 194.68011892, "ask_price": 95000.0, "bid_price": 94990.0},


{"date": "2021-04-12 19:23:53.762000", "total_ask_size": 104.49708611, "total_bid_size": 80.39778157, "ask_price": 94960.0, "bid_price": 94950.0},


{"date": "2021-04-12 19:23:54.809000", "total_ask_size": 11.91837699, "total_bid_size": 64.77837248, "ask_price": 94940.0, "bid_price": 94820.0},


{"date": "2021-04-12 19:23:55.672000", "total_ask_size": 18.1440163, "total_bid_size": 19.81148107, "ask_price": 94850.0, "bid_price": 94720.0},


{"date": "2021-04-12 19:23:56.716000", "total_ask_size": 5.97881038, "total_bid_size": 22.94445713, "ask_price": 94720.0, "bid_price": 94580.0},


{"date": "2021-04-12 19:23:57.578000", "total_ask_size": 20.74154563, "total_bid_size": 4.65272678, "ask_price": 94580.0, "bid_price": 94550.0},


{"date": "2021-04-12 19:23:58.279000", "total_ask_size": 105.55203715, "total_bid_size": 104.36950844, "ask_price": 94570.0, "bid_price": 94510.0},


{"date": "2021-04-12 19:23:59.842000", "total_ask_size": 34.36367913, "total_bid_size": 387.05793289, "ask_price": 94560.0, "bid_price": 94550.0},


{"date": "2021-04-12 19:24:00.533000", "total_ask_size": 31.83558428, "total_bid_size": 945.9354803, "ask_price": 94610.0, "bid_price": 94550.0},
]
