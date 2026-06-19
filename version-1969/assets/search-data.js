const SITE_MOVIES = [
  {
    "id": "0001",
    "title": "野良猫洛克：女番长",
    "year": "1970",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0001.html"
  },
  {
    "id": "0002",
    "title": "咎狗之血",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0002.html"
  },
  {
    "id": "0003",
    "title": "紧急边缘",
    "year": "2024",
    "region": "美国",
    "type": "剧集 (8集)",
    "category": "奇幻科幻",
    "url": "movie/movie-0003.html"
  },
  {
    "id": "0004",
    "title": "陷阱之中",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0004.html"
  },
  {
    "id": "0005",
    "title": "拳外重生",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0005.html"
  },
  {
    "id": "0006",
    "title": "护宝寻踪",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0006.html"
  },
  {
    "id": "0007",
    "title": "群狗逐狮",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0007.html"
  },
  {
    "id": "0008",
    "title": "我是那不勒斯人",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0008.html"
  },
  {
    "id": "0009",
    "title": "裁缝",
    "year": "2015",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0009.html"
  },
  {
    "id": "0010",
    "title": "火烧岛",
    "year": "1991",
    "region": "中国台湾",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0010.html"
  },
  {
    "id": "0011",
    "title": "英雄孟良崮",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0011.html"
  },
  {
    "id": "0012",
    "title": "家事提案",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0012.html"
  },
  {
    "id": "0013",
    "title": "23:59 猛鬼兵营",
    "year": "2011",
    "region": "新加坡",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0013.html"
  },
  {
    "id": "0014",
    "title": "釜山行",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0014.html"
  },
  {
    "id": "0015",
    "title": "总督张之洞",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0015.html"
  },
  {
    "id": "0016",
    "title": "大河向东流之沁源故事",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0016.html"
  },
  {
    "id": "0017",
    "title": "寻找伟大",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0017.html"
  },
  {
    "id": "0018",
    "title": "少年悍将：犹大之约",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0018.html"
  },
  {
    "id": "0019",
    "title": "金银岛奇侠传",
    "year": "2016",
    "region": "中国大陆",
    "type": "动画剧集",
    "category": "动画青春",
    "url": "movie/movie-0019.html"
  },
  {
    "id": "0020",
    "title": "甜蜜的咒诅",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0020.html"
  },
  {
    "id": "0021",
    "title": "赖家王老五",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0021.html"
  },
  {
    "id": "0022",
    "title": "雪里娇花",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0022.html"
  },
  {
    "id": "0023",
    "title": "斗士2025",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0023.html"
  },
  {
    "id": "0024",
    "title": "抢救足球危机",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0024.html"
  },
  {
    "id": "0025",
    "title": "无用的我看到了天",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0025.html"
  },
  {
    "id": "0026",
    "title": "斗破苍穹缘起",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0026.html"
  },
  {
    "id": "0027",
    "title": "明天搬家",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0027.html"
  },
  {
    "id": "0028",
    "title": "老幸运",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0028.html"
  },
  {
    "id": "0029",
    "title": "超时空少女",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0029.html"
  },
  {
    "id": "0030",
    "title": "莎哟娜啦",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0030.html"
  },
  {
    "id": "0031",
    "title": "深入敌后",
    "year": "2001",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0031.html"
  },
  {
    "id": "0032",
    "title": "超会装：银行抢劫攻略",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0032.html"
  },
  {
    "id": "0033",
    "title": "秘窗",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0033.html"
  },
  {
    "id": "0034",
    "title": "你的口袋藏把枪",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0034.html"
  },
  {
    "id": "0035",
    "title": "计程车上的私奔",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0035.html"
  },
  {
    "id": "0036",
    "title": "辛蒂不爱我",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0036.html"
  },
  {
    "id": "0037",
    "title": "铁甲冲锋队",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0037.html"
  },
  {
    "id": "0038",
    "title": "布鲁斯口琴",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0038.html"
  },
  {
    "id": "0039",
    "title": "还珠格格第二部",
    "year": "1999",
    "region": "中国台湾, 中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0039.html"
  },
  {
    "id": "0040",
    "title": "神秘博士与戴立克",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0040.html"
  },
  {
    "id": "0041",
    "title": "要久久爱",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0041.html"
  },
  {
    "id": "0042",
    "title": "我在岛屿读书第二季",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0042.html"
  },
  {
    "id": "0043",
    "title": "侯孝贤画像",
    "year": "2023",
    "region": "中国台湾",
    "type": "纪录片",
    "category": "经典年代",
    "url": "movie/movie-0043.html"
  },
  {
    "id": "0044",
    "title": "叛我心锁",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0044.html"
  },
  {
    "id": "0045",
    "title": "为了那些没有故事的人",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0045.html"
  },
  {
    "id": "0046",
    "title": "狂野追踪",
    "year": "2023",
    "region": "加拿大",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0046.html"
  },
  {
    "id": "0047",
    "title": "寂寞诊疗室",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0047.html"
  },
  {
    "id": "0048",
    "title": "岁月神偷",
    "year": "2028",
    "region": "中国香港",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0048.html"
  },
  {
    "id": "0049",
    "title": "超跑玩家",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0049.html"
  },
  {
    "id": "0050",
    "title": "醒狮 粤语",
    "year": "2021",
    "region": "香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0050.html"
  },
  {
    "id": "0051",
    "title": "猫与爷爷",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0051.html"
  },
  {
    "id": "0052",
    "title": "铠甲勇士刑天",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0052.html"
  },
  {
    "id": "0053",
    "title": "老爸行不行",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0053.html"
  },
  {
    "id": "0054",
    "title": "麦哲伦环游历险记",
    "year": "2019",
    "region": "西班牙",
    "type": "动画电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0054.html"
  },
  {
    "id": "0055",
    "title": "第39号案件",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0055.html"
  },
  {
    "id": "0056",
    "title": "失落风尘",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0056.html"
  },
  {
    "id": "0057",
    "title": "交界惊爆点2",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0057.html"
  },
  {
    "id": "0058",
    "title": "诱惑的港湾",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0058.html"
  },
  {
    "id": "0059",
    "title": "大地惊雷国语",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0059.html"
  },
  {
    "id": "0060",
    "title": "神话任务第二季",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0060.html"
  },
  {
    "id": "0061",
    "title": "霓裳记",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0061.html"
  },
  {
    "id": "0062",
    "title": "操控游戏",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0062.html"
  },
  {
    "id": "0063",
    "title": "当生命遇上生命",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0063.html"
  },
  {
    "id": "0064",
    "title": "不能说的夏天",
    "year": "2014",
    "region": "中国台湾",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0064.html"
  },
  {
    "id": "0065",
    "title": "九日秘闻",
    "year": "2025",
    "region": "中国大陆",
    "type": "短剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0065.html"
  },
  {
    "id": "0066",
    "title": "小母牛",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0066.html"
  },
  {
    "id": "0067",
    "title": "欲念游戏",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0067.html"
  },
  {
    "id": "0068",
    "title": "突破25马赫",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0068.html"
  },
  {
    "id": "0069",
    "title": "皮尔普斯一家",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0069.html"
  },
  {
    "id": "0070",
    "title": "哥你好",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0070.html"
  },
  {
    "id": "0071",
    "title": "无以回报",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0071.html"
  },
  {
    "id": "0072",
    "title": "那些人们",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0072.html"
  },
  {
    "id": "0073",
    "title": "秋水长天",
    "year": "1982",
    "region": "中国台湾",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0073.html"
  },
  {
    "id": "0074",
    "title": "幽灵医生",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0074.html"
  },
  {
    "id": "0075",
    "title": "骷髅人",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0075.html"
  },
  {
    "id": "0076",
    "title": "唯一的受害者",
    "year": "2010",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0076.html"
  },
  {
    "id": "0077",
    "title": "扮演受害者（电影）",
    "year": "2006",
    "region": "俄罗斯",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0077.html"
  },
  {
    "id": "0078",
    "title": "风月变",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0078.html"
  },
  {
    "id": "0079",
    "title": "砌砖匠",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0079.html"
  },
  {
    "id": "0080",
    "title": "1944",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0080.html"
  },
  {
    "id": "0081",
    "title": "杀人合约",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0081.html"
  },
  {
    "id": "0082",
    "title": "小鳄鱼的故事",
    "year": "2021",
    "region": "法国/比利时",
    "type": "动画系列片",
    "category": "动作犯罪",
    "url": "movie/movie-0082.html"
  },
  {
    "id": "0083",
    "title": "美娇娘探案社",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0083.html"
  },
  {
    "id": "0084",
    "title": "天堂岛疑云第十二季",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0084.html"
  },
  {
    "id": "0085",
    "title": "东北奇缘",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0085.html"
  },
  {
    "id": "0086",
    "title": "愿在你身边",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0086.html"
  },
  {
    "id": "0087",
    "title": "因爱富有",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0087.html"
  },
  {
    "id": "0088",
    "title": "成龙历险记第一季",
    "year": "2000",
    "region": "美国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0088.html"
  },
  {
    "id": "0089",
    "title": "那年我的初恋",
    "year": "2005",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0089.html"
  },
  {
    "id": "0090",
    "title": "维也纳复仇",
    "year": "2008",
    "region": "奥地利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0090.html"
  },
  {
    "id": "0091",
    "title": "三个少年第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "category": "亚洲精选",
    "url": "movie/movie-0091.html"
  },
  {
    "id": "0092",
    "title": "一子错",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0092.html"
  },
  {
    "id": "0093",
    "title": "下一个就是你：血腥玛丽",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0093.html"
  },
  {
    "id": "0094",
    "title": "龙樱",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0094.html"
  },
  {
    "id": "0095",
    "title": "雪色红颜",
    "year": "2017",
    "region": "中国",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0095.html"
  },
  {
    "id": "0096",
    "title": "复仇：爱的故事",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0096.html"
  },
  {
    "id": "0097",
    "title": "脆弱的英雄",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0097.html"
  },
  {
    "id": "0098",
    "title": "超龙珠英雄：监狱惑星篇",
    "year": "2018",
    "region": "日本",
    "type": "动画",
    "category": "喜剧家庭",
    "url": "movie/movie-0098.html"
  },
  {
    "id": "0099",
    "title": "日在校园：情人节",
    "year": "2021",
    "region": "日本",
    "type": "动画 / 电影",
    "category": "动画青春",
    "url": "movie/movie-0099.html"
  },
  {
    "id": "0100",
    "title": "恋夏絮语",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0100.html"
  },
  {
    "id": "0101",
    "title": "刀的哲学",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0101.html"
  },
  {
    "id": "0102",
    "title": "出柜好莱鸟",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0102.html"
  },
  {
    "id": "0103",
    "title": "禁武令之九幽烛龙",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0103.html"
  },
  {
    "id": "0104",
    "title": "超危险警探",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0104.html"
  },
  {
    "id": "0105",
    "title": "埃宫艳异",
    "year": "2020",
    "region": "英国 / 埃及",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0105.html"
  },
  {
    "id": "0106",
    "title": "神龙法师",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0106.html"
  },
  {
    "id": "0107",
    "title": "女人秘话",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0107.html"
  },
  {
    "id": "0108",
    "title": "美国一日",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0108.html"
  },
  {
    "id": "0109",
    "title": "小楠公与其母",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0109.html"
  },
  {
    "id": "0110",
    "title": "木制礼帽",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0110.html"
  },
  {
    "id": "0111",
    "title": "丈夫妻子小姨",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0111.html"
  },
  {
    "id": "0112",
    "title": "蛊惑狗寻宝",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0112.html"
  },
  {
    "id": "0113",
    "title": "冷酷与疯狂",
    "year": "1998",
    "region": "法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0113.html"
  },
  {
    "id": "0114",
    "title": "诅咒船长",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0114.html"
  },
  {
    "id": "0115",
    "title": "青夏：恋上你的30日",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0115.html"
  },
  {
    "id": "0116",
    "title": "对不起",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0116.html"
  },
  {
    "id": "0117",
    "title": "我跟总统的女儿约会",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0117.html"
  },
  {
    "id": "0118",
    "title": "回到首尔",
    "year": "2024",
    "region": "韩国 / 法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0118.html"
  },
  {
    "id": "0119",
    "title": "夏天19岁的肖像",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0119.html"
  },
  {
    "id": "0120",
    "title": "冰雪河来客",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0120.html"
  },
  {
    "id": "0121",
    "title": "拼了",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0121.html"
  },
  {
    "id": "0122",
    "title": "堡垒2019",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0122.html"
  },
  {
    "id": "0123",
    "title": "我失去了身体",
    "year": "2025",
    "region": "法国",
    "type": "电影/动画",
    "category": "亚洲精选",
    "url": "movie/movie-0123.html"
  },
  {
    "id": "0124",
    "title": "随时随地杀死你",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0124.html"
  },
  {
    "id": "0125",
    "title": "井下9人",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0125.html"
  },
  {
    "id": "0126",
    "title": "撒旦回归",
    "year": "2027",
    "region": "印度",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0126.html"
  },
  {
    "id": "0127",
    "title": "灯塔谋杀案",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0127.html"
  },
  {
    "id": "0128",
    "title": "花椒之味",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0128.html"
  },
  {
    "id": "0129",
    "title": "捣蛋鬼亨利",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0129.html"
  },
  {
    "id": "0130",
    "title": "寻则觅得",
    "year": "2025",
    "region": "中国香港 / 法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0130.html"
  },
  {
    "id": "0131",
    "title": "夜校女生",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0131.html"
  },
  {
    "id": "0132",
    "title": "耶路撒冷之屋",
    "year": "2025",
    "region": "以色列",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0132.html"
  },
  {
    "id": "0133",
    "title": "呼叫助产士 第四季",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0133.html"
  },
  {
    "id": "0134",
    "title": "还愿之旅",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0134.html"
  },
  {
    "id": "0135",
    "title": "骄傲与偏见",
    "year": "2026",
    "region": "英国",
    "type": "剧集 / 迷你剧",
    "category": "日韩风情",
    "url": "movie/movie-0135.html"
  },
  {
    "id": "0136",
    "title": "海蜇",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0136.html"
  },
  {
    "id": "0137",
    "title": "荳蔻年华",
    "year": "1989",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0137.html"
  },
  {
    "id": "0138",
    "title": "两代",
    "year": "2025",
    "region": "新加坡 / 马来西亚",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0138.html"
  },
  {
    "id": "0139",
    "title": "让爱做主",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0139.html"
  },
  {
    "id": "0140",
    "title": "北斗之拳系列:由利亚传",
    "year": "2006",
    "region": "日本",
    "type": "电影 / 动画",
    "category": "华语热播",
    "url": "movie/movie-0140.html"
  },
  {
    "id": "0141",
    "title": "身不由己",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0141.html"
  },
  {
    "id": "0142",
    "title": "性爱魔术师",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0142.html"
  },
  {
    "id": "0143",
    "title": "绝望之桥",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0143.html"
  },
  {
    "id": "0144",
    "title": "圣诞访客",
    "year": "2024",
    "region": "爱尔兰",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0144.html"
  },
  {
    "id": "0145",
    "title": "上流社会下流心",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0145.html"
  },
  {
    "id": "0146",
    "title": "居酒屋的幽灵",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0146.html"
  },
  {
    "id": "0147",
    "title": "婚礼片段",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0147.html"
  },
  {
    "id": "0148",
    "title": "雪琳娘",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0148.html"
  },
  {
    "id": "0149",
    "title": "2037",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0149.html"
  },
  {
    "id": "0150",
    "title": "爱情生活第二季",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0150.html"
  },
  {
    "id": "0151",
    "title": "明月冰心照杏林",
    "year": "2019",
    "region": "中国",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0151.html"
  },
  {
    "id": "0152",
    "title": "后浪",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0152.html"
  },
  {
    "id": "0153",
    "title": "菲利波鬼屋",
    "year": "2020",
    "region": "意大利",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0153.html"
  },
  {
    "id": "0154",
    "title": "毁灭之路",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0154.html"
  },
  {
    "id": "0155",
    "title": "强盗美眉",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "动画青春",
    "url": "movie/movie-0155.html"
  },
  {
    "id": "0156",
    "title": "无罪的罪人",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0156.html"
  },
  {
    "id": "0157",
    "title": "兰陵王2013",
    "year": "2013",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0157.html"
  },
  {
    "id": "0158",
    "title": "野战雄师",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0158.html"
  },
  {
    "id": "0159",
    "title": "探险活宝第六季",
    "year": "2014",
    "region": "美国",
    "type": "动漫",
    "category": "动作犯罪",
    "url": "movie/movie-0159.html"
  },
  {
    "id": "0160",
    "title": "绝命塔罗牌",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0160.html"
  },
  {
    "id": "0161",
    "title": "旺角黑夜",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0161.html"
  },
  {
    "id": "0162",
    "title": "玩偶1968",
    "year": "1968",
    "region": "日本",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0162.html"
  },
  {
    "id": "0163",
    "title": "青蛙王国",
    "year": "2013",
    "region": "中国大陆 / 韩国",
    "type": "动画电影",
    "category": "动作犯罪",
    "url": "movie/movie-0163.html"
  },
  {
    "id": "0164",
    "title": "猛鹰突击兵团",
    "year": "1976",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0164.html"
  },
  {
    "id": "0165",
    "title": "星际迷航3：超越星辰",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0165.html"
  },
  {
    "id": "0166",
    "title": "大富翁世界旅行2",
    "year": "2025",
    "region": "中国大陆, 中国香港",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-0166.html"
  },
  {
    "id": "0167",
    "title": "无限密室",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0167.html"
  },
  {
    "id": "0168",
    "title": "寻秦记国语",
    "year": "2001",
    "region": "中国香港",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0168.html"
  },
  {
    "id": "0169",
    "title": "女赛车手传奇",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0169.html"
  },
  {
    "id": "0170",
    "title": "罪人的真相",
    "year": "2017",
    "region": "美国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0170.html"
  },
  {
    "id": "0171",
    "title": "花豹少女队：勇闯西班牙",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0171.html"
  },
  {
    "id": "0172",
    "title": "绝岭惊魂",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0172.html"
  },
  {
    "id": "0173",
    "title": "致命香气",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0173.html"
  },
  {
    "id": "0174",
    "title": "前世金声",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0174.html"
  },
  {
    "id": "0175",
    "title": "神奇小子",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0175.html"
  },
  {
    "id": "0176",
    "title": "有翡",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0176.html"
  },
  {
    "id": "0177",
    "title": "大哥",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0177.html"
  },
  {
    "id": "0178",
    "title": "蒙特内哥罗奇遇",
    "year": "2025",
    "region": "黑山 / 塞尔维亚",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0178.html"
  },
  {
    "id": "0179",
    "title": "即使你不和我做",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0179.html"
  },
  {
    "id": "0180",
    "title": "恶梦布偶",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0180.html"
  },
  {
    "id": "0181",
    "title": "我们都是凶手",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0181.html"
  },
  {
    "id": "0182",
    "title": "爱的守护",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0182.html"
  },
  {
    "id": "0183",
    "title": "冲锋9号续集",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0183.html"
  },
  {
    "id": "0184",
    "title": "鸳鸯帕",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0184.html"
  },
  {
    "id": "0185",
    "title": "拂晓",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0185.html"
  },
  {
    "id": "0186",
    "title": "日落节拍",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0186.html"
  },
  {
    "id": "0187",
    "title": "好莱坞电锯妓女",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0187.html"
  },
  {
    "id": "0188",
    "title": "瓦德勒",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0188.html"
  },
  {
    "id": "0189",
    "title": "乡住温柔",
    "year": "2023",
    "region": "中国大陆",
    "type": "网剧",
    "category": "华语热播",
    "url": "movie/movie-0189.html"
  },
  {
    "id": "0190",
    "title": "真味小厨王",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0190.html"
  },
  {
    "id": "0191",
    "title": "狂乱背后：曼森家族谋杀案",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "category": "奇幻科幻",
    "url": "movie/movie-0191.html"
  },
  {
    "id": "0192",
    "title": "疯囚长夜",
    "year": "2023",
    "region": "中国大陆",
    "type": "悬疑惊悚电影",
    "category": "亚洲精选",
    "url": "movie/movie-0192.html"
  },
  {
    "id": "0193",
    "title": "17号出入口",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0193.html"
  },
  {
    "id": "0194",
    "title": "镖人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0194.html"
  },
  {
    "id": "0195",
    "title": "六号病房",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0195.html"
  },
  {
    "id": "0196",
    "title": "正义联盟：毁灭",
    "year": "2024",
    "region": "美国",
    "type": "电影/动画",
    "category": "喜剧家庭",
    "url": "movie/movie-0196.html"
  },
  {
    "id": "0197",
    "title": "终极三国2017",
    "year": "2017",
    "region": "中国台湾",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0197.html"
  },
  {
    "id": "0198",
    "title": "紧急搜捕令",
    "year": "2016",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0198.html"
  },
  {
    "id": "0199",
    "title": "无脸朋友",
    "year": "2020",
    "region": "法国 / 比利时",
    "type": "动画电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0199.html"
  },
  {
    "id": "0200",
    "title": "玩命警探2",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0200.html"
  },
  {
    "id": "0201",
    "title": "征信暴情",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0201.html"
  },
  {
    "id": "0202",
    "title": "激浪奇迹",
    "year": "2015",
    "region": "澳大利亚",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0202.html"
  },
  {
    "id": "0203",
    "title": "艾莲妹妹",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0203.html"
  },
  {
    "id": "0204",
    "title": "股市人生",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0204.html"
  },
  {
    "id": "0205",
    "title": "傲骨贤妻第二季",
    "year": "2010",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0205.html"
  },
  {
    "id": "0206",
    "title": "宇宙的圣诞节",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "动画青春",
    "url": "movie/movie-0206.html"
  },
  {
    "id": "0207",
    "title": "深入：美国、捕鲸与世界",
    "year": "2019",
    "region": "美国",
    "type": "纪录片",
    "category": "经典年代",
    "url": "movie/movie-0207.html"
  },
  {
    "id": "0208",
    "title": "华沙起义",
    "year": "2001",
    "region": "波兰",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0208.html"
  },
  {
    "id": "0209",
    "title": "女朋友",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0209.html"
  },
  {
    "id": "0210",
    "title": "遇见女孩的感觉",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0210.html"
  },
  {
    "id": "0211",
    "title": "第8夜",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0211.html"
  },
  {
    "id": "0212",
    "title": "完美父母",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0212.html"
  },
  {
    "id": "0213",
    "title": "春情初放",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0213.html"
  },
  {
    "id": "0214",
    "title": "你好英格兰",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0214.html"
  },
  {
    "id": "0215",
    "title": "意大利裔美国人",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0215.html"
  },
  {
    "id": "0216",
    "title": "达丽达",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0216.html"
  },
  {
    "id": "0217",
    "title": "舞台2023",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0217.html"
  },
  {
    "id": "0218",
    "title": "幽灵计划",
    "year": "2024",
    "region": "俄罗斯",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0218.html"
  },
  {
    "id": "0219",
    "title": "绝地救援",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0219.html"
  },
  {
    "id": "0220",
    "title": "在悠长的时光里等你",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0220.html"
  },
  {
    "id": "0221",
    "title": "白云之下",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0221.html"
  },
  {
    "id": "0222",
    "title": "挥著翅膀的女孩",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0222.html"
  },
  {
    "id": "0223",
    "title": "魔道祖师 日语版",
    "year": "2021",
    "region": "日本",
    "type": "动画",
    "category": "动画青春",
    "url": "movie/movie-0223.html"
  },
  {
    "id": "0224",
    "title": "星巴·克",
    "year": "2014",
    "region": "美国, 意大利",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0224.html"
  },
  {
    "id": "0225",
    "title": "地中海发烧友",
    "year": "2021",
    "region": "法国/意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0225.html"
  },
  {
    "id": "0226",
    "title": "失眠社群系列之不眠之夜",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0226.html"
  },
  {
    "id": "0227",
    "title": "决战猩球",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0227.html"
  },
  {
    "id": "0228",
    "title": "低谷医生",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0228.html"
  },
  {
    "id": "0229",
    "title": "葬式的名人",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0229.html"
  },
  {
    "id": "0230",
    "title": "夏天的大人们",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0230.html"
  },
  {
    "id": "0231",
    "title": "我童年的天空国语",
    "year": "1993",
    "region": "中国台湾",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0231.html"
  },
  {
    "id": "0232",
    "title": "金牌红娘",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0232.html"
  },
  {
    "id": "0233",
    "title": "高年级姐妹会",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0233.html"
  },
  {
    "id": "0234",
    "title": "琴谜变奏曲",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0234.html"
  },
  {
    "id": "0235",
    "title": "替代者2混沌梦魇",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0235.html"
  },
  {
    "id": "0236",
    "title": "飓风",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0236.html"
  },
  {
    "id": "0237",
    "title": "角斗士国语",
    "year": "2023",
    "region": "美国 / 中国大陆（配音版）",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0237.html"
  },
  {
    "id": "0238",
    "title": "没有被炉的家",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0238.html"
  },
  {
    "id": "0239",
    "title": "东坡",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0239.html"
  },
  {
    "id": "0240",
    "title": "烈火战车",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0240.html"
  },
  {
    "id": "0241",
    "title": "高粱地里大麦熟",
    "year": "1989",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0241.html"
  },
  {
    "id": "0242",
    "title": "地球食欲",
    "year": "2025",
    "region": "中国大陆",
    "type": "科幻电影",
    "category": "动作犯罪",
    "url": "movie/movie-0242.html"
  },
  {
    "id": "0243",
    "title": "独角兽",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0243.html"
  },
  {
    "id": "0244",
    "title": "最美丽",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0244.html"
  },
  {
    "id": "0245",
    "title": "升起月光",
    "year": "2024",
    "region": "美国 / 爱尔兰",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0245.html"
  },
  {
    "id": "0246",
    "title": "举重妖精金福珠",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0246.html"
  },
  {
    "id": "0247",
    "title": "受伤的游戏",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0247.html"
  },
  {
    "id": "0248",
    "title": "巴黎歌剧院",
    "year": "2024",
    "region": "法国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0248.html"
  },
  {
    "id": "0249",
    "title": "娥摩拉罪恶之城",
    "year": "2024",
    "region": "意大利",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0249.html"
  },
  {
    "id": "0250",
    "title": "代号：铁铬行动",
    "year": "2019",
    "region": "俄罗斯",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0250.html"
  },
  {
    "id": "0251",
    "title": "猩球崛起：黎明之战",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0251.html"
  },
  {
    "id": "0252",
    "title": "特工插班生",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0252.html"
  },
  {
    "id": "0253",
    "title": "初代吸血鬼第一季",
    "year": "2013",
    "region": "美国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0253.html"
  },
  {
    "id": "0254",
    "title": "探险活宝第七季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0254.html"
  },
  {
    "id": "0255",
    "title": "少男心事",
    "year": "2019",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0255.html"
  },
  {
    "id": "0256",
    "title": "雪豹和她的朋友们",
    "year": "2023",
    "region": "中国",
    "type": "纪录片",
    "category": "高分片库",
    "url": "movie/movie-0256.html"
  },
  {
    "id": "0257",
    "title": "旗袍美探",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0257.html"
  },
  {
    "id": "0258",
    "title": "义不容情",
    "year": "2027",
    "region": "中国香港",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0258.html"
  },
  {
    "id": "0259",
    "title": "叫我弗兰西斯科",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0259.html"
  },
  {
    "id": "0260",
    "title": "疯劫",
    "year": "2020",
    "region": "中国大陆",
    "type": "犯罪惊悚电影",
    "category": "动画青春",
    "url": "movie/movie-0260.html"
  },
  {
    "id": "0261",
    "title": "毁婚二十一条",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0261.html"
  },
  {
    "id": "0262",
    "title": "猫无赦",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0262.html"
  },
  {
    "id": "0263",
    "title": "大唐诗圣",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0263.html"
  },
  {
    "id": "0264",
    "title": "机器肉鸡第一季",
    "year": "2005",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0264.html"
  },
  {
    "id": "0265",
    "title": "夜间小屋",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0265.html"
  },
  {
    "id": "0266",
    "title": "东北情圣",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "经典年代",
    "url": "movie/movie-0266.html"
  },
  {
    "id": "0267",
    "title": "奇石",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0267.html"
  },
  {
    "id": "0268",
    "title": "云雾之间",
    "year": "2025",
    "region": "哥伦比亚",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0268.html"
  },
  {
    "id": "0269",
    "title": "人狼游戏：地狱",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0269.html"
  },
  {
    "id": "0270",
    "title": "盒装美人",
    "year": "1997",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0270.html"
  },
  {
    "id": "0271",
    "title": "地中海热",
    "year": "2025",
    "region": "意大利 / 法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0271.html"
  },
  {
    "id": "0272",
    "title": "冬日浪人",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0272.html"
  },
  {
    "id": "0273",
    "title": "古剑奇谭之伏魔纪",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影 / 网络电影",
    "category": "动作犯罪",
    "url": "movie/movie-0273.html"
  },
  {
    "id": "0274",
    "title": "铁道风云",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0274.html"
  },
  {
    "id": "0275",
    "title": "环球卫士",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0275.html"
  },
  {
    "id": "0276",
    "title": "爱人！别跑",
    "year": "2022",
    "region": "泰国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0276.html"
  },
  {
    "id": "0277",
    "title": "勇探豪情",
    "year": "2004",
    "region": "中国香港",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0277.html"
  },
  {
    "id": "0278",
    "title": "人民公敌",
    "year": "2021",
    "region": "挪威",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0278.html"
  },
  {
    "id": "0279",
    "title": "将军鲁纳",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0279.html"
  },
  {
    "id": "0280",
    "title": "1931刺杀宋子文之谜",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0280.html"
  },
  {
    "id": "0281",
    "title": "中国先生",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0281.html"
  },
  {
    "id": "0282",
    "title": "苏生龙王传说",
    "year": "2010",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画青春",
    "url": "movie/movie-0282.html"
  },
  {
    "id": "0283",
    "title": "虫笼的卡伽斯特尔",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "category": "动画青春",
    "url": "movie/movie-0283.html"
  },
  {
    "id": "0284",
    "title": "足球铁粉",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0284.html"
  },
  {
    "id": "0285",
    "title": "戏杀",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0285.html"
  },
  {
    "id": "0286",
    "title": "天山紧急出动",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0286.html"
  },
  {
    "id": "0287",
    "title": "路达·马蒂",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0287.html"
  },
  {
    "id": "0288",
    "title": "芒果最大牌2022",
    "year": "2022",
    "region": "中国",
    "type": "综艺",
    "category": "日韩风情",
    "url": "movie/movie-0288.html"
  },
  {
    "id": "0289",
    "title": "舞火者",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0289.html"
  },
  {
    "id": "0290",
    "title": "铜月亮",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0290.html"
  },
  {
    "id": "0291",
    "title": "巴黎妓院回忆录",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0291.html"
  },
  {
    "id": "0292",
    "title": "猛虎英雄传",
    "year": "2009",
    "region": "中国大陆",
    "type": "武侠动作电影",
    "category": "日韩风情",
    "url": "movie/movie-0292.html"
  },
  {
    "id": "0293",
    "title": "一团乱麻",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0293.html"
  },
  {
    "id": "0294",
    "title": "块肉余生",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0294.html"
  },
  {
    "id": "0295",
    "title": "直到天空迎来太阳",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0295.html"
  },
  {
    "id": "0296",
    "title": "孽扣",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0296.html"
  },
  {
    "id": "0297",
    "title": "我以前比较黑",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0297.html"
  },
  {
    "id": "0298",
    "title": "极寒之地",
    "year": "2025",
    "region": "加拿大 / 美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0298.html"
  },
  {
    "id": "0299",
    "title": "你老头也是",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0299.html"
  },
  {
    "id": "0300",
    "title": "玛莉的回溯之旅",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0300.html"
  },
  {
    "id": "0301",
    "title": "灵异鬼现",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0301.html"
  },
  {
    "id": "0302",
    "title": "马尔姆克罗格庄园",
    "year": "2024",
    "region": "挪威 / 瑞典",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0302.html"
  },
  {
    "id": "0303",
    "title": "隐藏摄影机",
    "year": "2024",
    "region": "法国 / 奥地利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0303.html"
  },
  {
    "id": "0304",
    "title": "诱拐",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0304.html"
  },
  {
    "id": "0305",
    "title": "铁石心肠2019",
    "year": "2019",
    "region": "泰国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0305.html"
  },
  {
    "id": "0306",
    "title": "小欢喜",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0306.html"
  },
  {
    "id": "0307",
    "title": "铜雀阁",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0307.html"
  },
  {
    "id": "0308",
    "title": "带子洪郎",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0308.html"
  },
  {
    "id": "0309",
    "title": "醋海风波",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0309.html"
  },
  {
    "id": "0310",
    "title": "太阳与波莱罗",
    "year": "2001",
    "region": "西班牙",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0310.html"
  },
  {
    "id": "0311",
    "title": "菩提树",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0311.html"
  },
  {
    "id": "0312",
    "title": "血战霹雳车",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0312.html"
  },
  {
    "id": "0313",
    "title": "新安妮日记",
    "year": "2021",
    "region": "荷兰 / 德国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0313.html"
  },
  {
    "id": "0314",
    "title": "下一站天后",
    "year": "2017",
    "region": "香港",
    "type": "青春爱情电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0314.html"
  },
  {
    "id": "0315",
    "title": "黑色灵魂",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0315.html"
  },
  {
    "id": "0316",
    "title": "从心所愿",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0316.html"
  },
  {
    "id": "0317",
    "title": "猛加拉杀手",
    "year": "2023",
    "region": "孟加拉国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0317.html"
  },
  {
    "id": "0318",
    "title": "爱与死亡",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0318.html"
  },
  {
    "id": "0319",
    "title": "沦落风尘一妇人",
    "year": "2029",
    "region": "中国台湾",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0319.html"
  },
  {
    "id": "0320",
    "title": "我是歌手音乐小屋1号",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺/音乐真人秀",
    "category": "日韩风情",
    "url": "movie/movie-0320.html"
  },
  {
    "id": "0321",
    "title": "俄亥俄州的魔鬼",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0321.html"
  },
  {
    "id": "0322",
    "title": "杀不死",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0322.html"
  },
  {
    "id": "0323",
    "title": "我们没有明天",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0323.html"
  },
  {
    "id": "0324",
    "title": "卧虎潜龙",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0324.html"
  },
  {
    "id": "0325",
    "title": "头颅游戏",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0325.html"
  },
  {
    "id": "0326",
    "title": "恐惧街",
    "year": "2022",
    "region": "日本",
    "type": "惊悚恐怖电影",
    "category": "经典年代",
    "url": "movie/movie-0326.html"
  },
  {
    "id": "0327",
    "title": "宽广的世界",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0327.html"
  },
  {
    "id": "0328",
    "title": "当两个世界碰撞时",
    "year": "2027",
    "region": "美国 / 德国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0328.html"
  },
  {
    "id": "0329",
    "title": "针孔旅社2：前传",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0329.html"
  },
  {
    "id": "0330",
    "title": "业余侦探",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0330.html"
  },
  {
    "id": "0331",
    "title": "狐妖小红娘月红篇",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0331.html"
  },
  {
    "id": "0332",
    "title": "不做爱情傻子",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0332.html"
  },
  {
    "id": "0333",
    "title": "让悲伤长出翅膀",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0333.html"
  },
  {
    "id": "0334",
    "title": "女人们的谈话2022",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0334.html"
  },
  {
    "id": "0335",
    "title": "田凫",
    "year": "2026",
    "region": "英国 / 爱尔兰",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0335.html"
  },
  {
    "id": "0336",
    "title": "半把剪刀",
    "year": "1999",
    "region": "中国大陆",
    "type": "电视剧集",
    "category": "经典年代",
    "url": "movie/movie-0336.html"
  },
  {
    "id": "0337",
    "title": "与谁共眠",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0337.html"
  },
  {
    "id": "0338",
    "title": "鳄鱼虱乸",
    "year": "2025",
    "region": "中国香港 / 马来西亚",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0338.html"
  },
  {
    "id": "0339",
    "title": "再次被关",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0339.html"
  },
  {
    "id": "0340",
    "title": "救女心切",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0340.html"
  },
  {
    "id": "0341",
    "title": "胡涂老倌",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0341.html"
  },
  {
    "id": "0342",
    "title": "悍将老妈",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0342.html"
  },
  {
    "id": "0343",
    "title": "萨尔托",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0343.html"
  },
  {
    "id": "0344",
    "title": "浮沉",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0344.html"
  },
  {
    "id": "0345",
    "title": "被遗忘的人",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0345.html"
  },
  {
    "id": "0346",
    "title": "胖子、爱情和错误！",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0346.html"
  },
  {
    "id": "0347",
    "title": "杀手没有假期",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0347.html"
  },
  {
    "id": "0348",
    "title": "终极正义",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0348.html"
  },
  {
    "id": "0349",
    "title": "换脸·恶梦方醒",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0349.html"
  },
  {
    "id": "0350",
    "title": "超胆侠第三季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0350.html"
  },
  {
    "id": "0351",
    "title": "纽约王",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0351.html"
  },
  {
    "id": "0352",
    "title": "快乐的人们",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0352.html"
  },
  {
    "id": "0353",
    "title": "火线交锋",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0353.html"
  },
  {
    "id": "0354",
    "title": "太空狗之月球大冒险",
    "year": "2014",
    "region": "俄罗斯",
    "type": "动画电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0354.html"
  },
  {
    "id": "0355",
    "title": "大话夹好彩",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0355.html"
  },
  {
    "id": "0356",
    "title": "22号追击者",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0356.html"
  },
  {
    "id": "0357",
    "title": "来路不明的神秘女友",
    "year": "2018",
    "region": "韩国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0357.html"
  },
  {
    "id": "0358",
    "title": "巨鳄风暴",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0358.html"
  },
  {
    "id": "0359",
    "title": "决战猩球1973",
    "year": "1973",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0359.html"
  },
  {
    "id": "0360",
    "title": "爱我",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0360.html"
  },
  {
    "id": "0361",
    "title": "炎女",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0361.html"
  },
  {
    "id": "0362",
    "title": "确定的事情",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0362.html"
  },
  {
    "id": "0363",
    "title": "少年伊戈尔与鹤",
    "year": "2018",
    "region": "俄罗斯",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0363.html"
  },
  {
    "id": "0364",
    "title": "神之一手",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0364.html"
  },
  {
    "id": "0365",
    "title": "灵异时刻",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0365.html"
  },
  {
    "id": "0366",
    "title": "太白山脉",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0366.html"
  },
  {
    "id": "0367",
    "title": "计程车司机之死",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0367.html"
  },
  {
    "id": "0368",
    "title": "皇妃大逃亡",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0368.html"
  },
  {
    "id": "0369",
    "title": "恶魔的艺术2：邪降",
    "year": "2005",
    "region": "泰国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0369.html"
  },
  {
    "id": "0370",
    "title": "小熊维尼之小猪大行动",
    "year": "2023",
    "region": "英国",
    "type": "动画电影",
    "category": "亚洲精选",
    "url": "movie/movie-0370.html"
  },
  {
    "id": "0371",
    "title": "重拳",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0371.html"
  },
  {
    "id": "0372",
    "title": "在波威",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0372.html"
  },
  {
    "id": "0373",
    "title": "箭侠恩仇粤语",
    "year": "1995",
    "region": "中国香港",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0373.html"
  },
  {
    "id": "0374",
    "title": "半生缘2002",
    "year": "2002",
    "region": "中国香港",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-0374.html"
  },
  {
    "id": "0375",
    "title": "滑稽",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0375.html"
  },
  {
    "id": "0376",
    "title": "夺金歼霸战",
    "year": "1996",
    "region": "美国 / 中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0376.html"
  },
  {
    "id": "0377",
    "title": "无境之兽",
    "year": "2025",
    "region": "尼日利亚/美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0377.html"
  },
  {
    "id": "0378",
    "title": "欢乐丛林",
    "year": "1994",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0378.html"
  },
  {
    "id": "0379",
    "title": "都是一家人",
    "year": "2024",
    "region": "中国大陆 / 新加坡",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0379.html"
  },
  {
    "id": "0380",
    "title": "深呼吸的必要",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0380.html"
  },
  {
    "id": "0381",
    "title": "爱生事家庭粤语",
    "year": "1992",
    "region": "中国香港",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0381.html"
  },
  {
    "id": "0382",
    "title": "最后一镖",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0382.html"
  },
  {
    "id": "0383",
    "title": "我，克罗蒂亚",
    "year": "2024",
    "region": "意大利",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0383.html"
  },
  {
    "id": "0384",
    "title": "元首的面孔",
    "year": "2025",
    "region": "美国",
    "type": "动画短片",
    "category": "亚洲精选",
    "url": "movie/movie-0384.html"
  },
  {
    "id": "0385",
    "title": "周成过台湾",
    "year": "2018",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0385.html"
  },
  {
    "id": "0386",
    "title": "冒牌总统",
    "year": "2017",
    "region": "美国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0386.html"
  },
  {
    "id": "0387",
    "title": "泰坦：米开朗基罗的故事",
    "year": "2019",
    "region": "意大利 / 英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0387.html"
  },
  {
    "id": "0388",
    "title": "最后的成员",
    "year": "2020",
    "region": "瑞典",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0388.html"
  },
  {
    "id": "0389",
    "title": "疯狂外星人",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0389.html"
  },
  {
    "id": "0390",
    "title": "朝九晚五",
    "year": "1980",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0390.html"
  },
  {
    "id": "0391",
    "title": "找到奥司汀",
    "year": "2020",
    "region": "美国",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0391.html"
  },
  {
    "id": "0392",
    "title": "险路勿近",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0392.html"
  },
  {
    "id": "0393",
    "title": "失控陪审团国语",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0393.html"
  },
  {
    "id": "0394",
    "title": "切肤之痛",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0394.html"
  },
  {
    "id": "0395",
    "title": "道歉大师",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0395.html"
  },
  {
    "id": "0396",
    "title": "黑色直播",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0396.html"
  },
  {
    "id": "0397",
    "title": "女郎出租",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0397.html"
  },
  {
    "id": "0398",
    "title": "最危险游戏第二季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0398.html"
  },
  {
    "id": "0399",
    "title": "暑期何漫漫",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0399.html"
  },
  {
    "id": "0400",
    "title": "致命行动",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0400.html"
  },
  {
    "id": "0401",
    "title": "献祭",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0401.html"
  },
  {
    "id": "0402",
    "title": "直面病魔",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0402.html"
  },
  {
    "id": "0403",
    "title": "拳语者",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0403.html"
  },
  {
    "id": "0404",
    "title": "外婆的重托",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0404.html"
  },
  {
    "id": "0405",
    "title": "蒙面唱将猜猜猜第四季",
    "year": "2024",
    "region": "中国",
    "type": "综艺",
    "category": "华语热播",
    "url": "movie/movie-0405.html"
  },
  {
    "id": "0406",
    "title": "论文商店",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0406.html"
  },
  {
    "id": "0407",
    "title": "大煞星与小妹头国语",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0407.html"
  },
  {
    "id": "0408",
    "title": "仙乐军魂",
    "year": "2009",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0408.html"
  },
  {
    "id": "0409",
    "title": "露娜的复仇",
    "year": "2020",
    "region": "韩国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0409.html"
  },
  {
    "id": "0410",
    "title": "他们微笑的样子",
    "year": "1998",
    "region": "意大利",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0410.html"
  },
  {
    "id": "0411",
    "title": "松花江上",
    "year": "1947",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0411.html"
  },
  {
    "id": "0412",
    "title": "盛夏假期遇见爱",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0412.html"
  },
  {
    "id": "0413",
    "title": "各取应得",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0413.html"
  },
  {
    "id": "0414",
    "title": "野外的勇气",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0414.html"
  },
  {
    "id": "0415",
    "title": "那夜的武士",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0415.html"
  },
  {
    "id": "0416",
    "title": "出轨风暴",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0416.html"
  },
  {
    "id": "0417",
    "title": "诡异入侵",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0417.html"
  },
  {
    "id": "0418",
    "title": "人吓人粤语",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0418.html"
  },
  {
    "id": "0419",
    "title": "连花仙子",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0419.html"
  },
  {
    "id": "0420",
    "title": "瀛台泣血",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0420.html"
  },
  {
    "id": "0421",
    "title": "敦煌夜谭",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0421.html"
  },
  {
    "id": "0422",
    "title": "钛",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0422.html"
  },
  {
    "id": "0423",
    "title": "少年歌行血染天启篇",
    "year": "2026",
    "region": "中国大陆",
    "type": "动漫",
    "category": "亚洲精选",
    "url": "movie/movie-0423.html"
  },
  {
    "id": "0424",
    "title": "我的主场",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0424.html"
  },
  {
    "id": "0425",
    "title": "高地营救",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0425.html"
  },
  {
    "id": "0426",
    "title": "美男记",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0426.html"
  },
  {
    "id": "0427",
    "title": "角头风云",
    "year": "1989",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0427.html"
  },
  {
    "id": "0428",
    "title": "恋爱先生",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0428.html"
  },
  {
    "id": "0429",
    "title": "泳池管理员",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0429.html"
  },
  {
    "id": "0430",
    "title": "麻辣母女",
    "year": "2008",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0430.html"
  },
  {
    "id": "0431",
    "title": "沉默的眼睛",
    "year": "2029",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0431.html"
  },
  {
    "id": "0432",
    "title": "胡佛",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0432.html"
  },
  {
    "id": "0433",
    "title": "大麻.灵丹还是毒药",
    "year": "2021",
    "region": "美国",
    "type": "纪录片",
    "category": "奇幻科幻",
    "url": "movie/movie-0433.html"
  },
  {
    "id": "0434",
    "title": "奥奇传说",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0434.html"
  },
  {
    "id": "0435",
    "title": "小迷糊又天翻地覆",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0435.html"
  },
  {
    "id": "0436",
    "title": "卡萨尔指挥：1964",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0436.html"
  },
  {
    "id": "0437",
    "title": "寒涛俪影",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0437.html"
  },
  {
    "id": "0438",
    "title": "卧底甜心",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0438.html"
  },
  {
    "id": "0439",
    "title": "笑傲江湖2东方不败",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0439.html"
  },
  {
    "id": "0440",
    "title": "呢个校园选乜鬼",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0440.html"
  },
  {
    "id": "0441",
    "title": "蛇穴",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0441.html"
  },
  {
    "id": "0442",
    "title": "魅祸啦啦队",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0442.html"
  },
  {
    "id": "0443",
    "title": "驯龙高手：骨碎龙传说",
    "year": "2026",
    "region": "美国",
    "type": "电影/动画",
    "category": "亚洲精选",
    "url": "movie/movie-0443.html"
  },
  {
    "id": "0444",
    "title": "黑狱霸王花",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0444.html"
  },
  {
    "id": "0445",
    "title": "靶鸽",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0445.html"
  },
  {
    "id": "0446",
    "title": "电影明星大乱斗",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0446.html"
  },
  {
    "id": "0447",
    "title": "在梦中和现实中飞翔",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0447.html"
  },
  {
    "id": "0448",
    "title": "狄更斯的秘密情史",
    "year": "2016",
    "region": "英国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0448.html"
  },
  {
    "id": "0449",
    "title": "折磨",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0449.html"
  },
  {
    "id": "0450",
    "title": "蛇王",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0450.html"
  },
  {
    "id": "0451",
    "title": "萨米大冒险2",
    "year": "2024",
    "region": "比利时",
    "type": "动画电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0451.html"
  },
  {
    "id": "0452",
    "title": "乘坐彗星",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0452.html"
  },
  {
    "id": "0453",
    "title": "衰鬼抓狂",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0453.html"
  },
  {
    "id": "0454",
    "title": "流星",
    "year": "2010",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0454.html"
  },
  {
    "id": "0455",
    "title": "绿门之后",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0455.html"
  },
  {
    "id": "0456",
    "title": "聊斋新传之奇女子",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0456.html"
  },
  {
    "id": "0457",
    "title": "双子酒廊",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0457.html"
  },
  {
    "id": "0458",
    "title": "爱的火花",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0458.html"
  },
  {
    "id": "0459",
    "title": "间谍过家家代号:白",
    "year": "2024",
    "region": "日本",
    "type": "电影版",
    "category": "日韩风情",
    "url": "movie/movie-0459.html"
  },
  {
    "id": "0460",
    "title": "权少的贴身翻译官",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0460.html"
  },
  {
    "id": "0461",
    "title": "证明完毕",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0461.html"
  },
  {
    "id": "0462",
    "title": "五十",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0462.html"
  },
  {
    "id": "0463",
    "title": "秘密关系台版",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0463.html"
  },
  {
    "id": "0464",
    "title": "心动警报第一部",
    "year": "2018",
    "region": "韩国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0464.html"
  },
  {
    "id": "0465",
    "title": "艺术走廊中的诱惑",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0465.html"
  },
  {
    "id": "0466",
    "title": "麦田少年",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0466.html"
  },
  {
    "id": "0467",
    "title": "同日再爱你",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0467.html"
  },
  {
    "id": "0468",
    "title": "地球殒落",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0468.html"
  },
  {
    "id": "0469",
    "title": "钢铁是怎样炼成的",
    "year": "1973",
    "region": "俄罗斯",
    "type": "史诗电影",
    "category": "动画青春",
    "url": "movie/movie-0469.html"
  },
  {
    "id": "0470",
    "title": "区区有鬼故粤语",
    "year": "2014",
    "region": "中国香港",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0470.html"
  },
  {
    "id": "0471",
    "title": "上流俗女",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0471.html"
  },
  {
    "id": "0472",
    "title": "西游超级粉",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0472.html"
  },
  {
    "id": "0473",
    "title": "抬头见喜",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0473.html"
  },
  {
    "id": "0474",
    "title": "霹雳皇朝之铡龑史",
    "year": "2007",
    "region": "中国台湾",
    "type": "布袋戏剧集",
    "category": "华语热播",
    "url": "movie/movie-0474.html"
  },
  {
    "id": "0475",
    "title": "我们像葵花",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0475.html"
  },
  {
    "id": "0476",
    "title": "三个人在新德里",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0476.html"
  },
  {
    "id": "0477",
    "title": "帕西法尔",
    "year": "1978",
    "region": "法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0477.html"
  },
  {
    "id": "0478",
    "title": "灰石之中",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0478.html"
  },
  {
    "id": "0479",
    "title": "海誓山盟万古情",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0479.html"
  },
  {
    "id": "0480",
    "title": "迷失太空第二季",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0480.html"
  },
  {
    "id": "0481",
    "title": "特别任务",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0481.html"
  },
  {
    "id": "0482",
    "title": "昔有琉璃瓦",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0482.html"
  },
  {
    "id": "0483",
    "title": "元龙",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画剧集",
    "category": "华语热播",
    "url": "movie/movie-0483.html"
  },
  {
    "id": "0484",
    "title": "跨越非洲：世界杯追梦旅程",
    "year": "2026",
    "region": "中国大陆 / 南非",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0484.html"
  },
  {
    "id": "0485",
    "title": "西部四霸天",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0485.html"
  },
  {
    "id": "0486",
    "title": "计算机核战舰爆破大作战",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0486.html"
  },
  {
    "id": "0487",
    "title": "放浪记",
    "year": "1981",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0487.html"
  },
  {
    "id": "0488",
    "title": "缅因海快递",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0488.html"
  },
  {
    "id": "0489",
    "title": "爱的诗韵",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0489.html"
  },
  {
    "id": "0490",
    "title": "星际争霸战：浩瀚无垠",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0490.html"
  },
  {
    "id": "0491",
    "title": "心灵的冒险",
    "year": "1997",
    "region": "英国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0491.html"
  },
  {
    "id": "0492",
    "title": "魔法师的第五个冬天",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0492.html"
  },
  {
    "id": "0493",
    "title": "鬼娘子",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0493.html"
  },
  {
    "id": "0494",
    "title": "四坪半恋人",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0494.html"
  },
  {
    "id": "0495",
    "title": "祸水美人大侦探",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0495.html"
  },
  {
    "id": "0496",
    "title": "毒贩（电影）",
    "year": "2021",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0496.html"
  },
  {
    "id": "0497",
    "title": "蛮荒林区",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0497.html"
  },
  {
    "id": "0498",
    "title": "荒蛮故事",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0498.html"
  },
  {
    "id": "0499",
    "title": "忽然7鸭",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0499.html"
  },
  {
    "id": "0500",
    "title": "花田喜事",
    "year": "1993",
    "region": "中国香港",
    "type": "喜剧电影",
    "category": "日韩风情",
    "url": "movie/movie-0500.html"
  },
  {
    "id": "0501",
    "title": "温暖渐冻心",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0501.html"
  },
  {
    "id": "0502",
    "title": "超人梅比斯外传 凶兽重生",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0502.html"
  },
  {
    "id": "0503",
    "title": "第六感追缉令",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0503.html"
  },
  {
    "id": "0504",
    "title": "跑男来了第七季",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "日韩风情",
    "url": "movie/movie-0504.html"
  },
  {
    "id": "0505",
    "title": "诗人的爱情",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0505.html"
  },
  {
    "id": "0506",
    "title": "友军倒下",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0506.html"
  },
  {
    "id": "0507",
    "title": "布克与传教士",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0507.html"
  },
  {
    "id": "0508",
    "title": "死亡吞弑",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0508.html"
  },
  {
    "id": "0509",
    "title": "野性的邂逅粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0509.html"
  },
  {
    "id": "0510",
    "title": "百米。",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0510.html"
  },
  {
    "id": "0511",
    "title": "突击队和一去不回的海兵",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0511.html"
  },
  {
    "id": "0512",
    "title": "日本殉情传",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0512.html"
  },
  {
    "id": "0513",
    "title": "危险孵化",
    "year": "2026",
    "region": "澳大利亚",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0513.html"
  },
  {
    "id": "0514",
    "title": "倚天屠龙记大结局",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0514.html"
  },
  {
    "id": "0515",
    "title": "金匾背后",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0515.html"
  },
  {
    "id": "0516",
    "title": "暗影学园",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0516.html"
  },
  {
    "id": "0517",
    "title": "狂暴巨蜥",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0517.html"
  },
  {
    "id": "0518",
    "title": "狗剩快跑",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0518.html"
  },
  {
    "id": "0519",
    "title": "无光公路",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0519.html"
  },
  {
    "id": "0520",
    "title": "鬼哭神嚎1996",
    "year": "1996",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0520.html"
  },
  {
    "id": "0521",
    "title": "魔法使的条件",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0521.html"
  },
  {
    "id": "0522",
    "title": "莫斯科郊外的晚上",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0522.html"
  },
  {
    "id": "0523",
    "title": "梭哈人生",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0523.html"
  },
  {
    "id": "0524",
    "title": "路德维希",
    "year": "2024",
    "region": "德国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0524.html"
  },
  {
    "id": "0525",
    "title": "震荡疗情",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0525.html"
  },
  {
    "id": "0526",
    "title": "辛亥元勋蒋翊武",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0526.html"
  },
  {
    "id": "0527",
    "title": "弥次喜多道中 奇鱼",
    "year": "2007",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0527.html"
  },
  {
    "id": "0528",
    "title": "主教怎么了",
    "year": "2025",
    "region": "英国",
    "type": "迷你剧",
    "category": "经典年代",
    "url": "movie/movie-0528.html"
  },
  {
    "id": "0529",
    "title": "战地晴天",
    "year": "2022",
    "region": "英国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0529.html"
  },
  {
    "id": "0530",
    "title": "吸血鬼猎人巴菲第七季",
    "year": "2003",
    "region": "美国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0530.html"
  },
  {
    "id": "0531",
    "title": "黑蝶漫舞",
    "year": "2011",
    "region": "南非/荷兰",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0531.html"
  },
  {
    "id": "0532",
    "title": "烧肉大战",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0532.html"
  },
  {
    "id": "0533",
    "title": "欢乐满江湖",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0533.html"
  },
  {
    "id": "0534",
    "title": "群雄夺宝",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0534.html"
  },
  {
    "id": "0535",
    "title": "斑马人",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0535.html"
  },
  {
    "id": "0536",
    "title": "近战法师",
    "year": "2023",
    "region": "中国内地",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0536.html"
  },
  {
    "id": "0537",
    "title": "苏活惊魂夜",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0537.html"
  },
  {
    "id": "0538",
    "title": "急诊科医生",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0538.html"
  },
  {
    "id": "0539",
    "title": "柠檬仙丹",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0539.html"
  },
  {
    "id": "0540",
    "title": "异形兽",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0540.html"
  },
  {
    "id": "0541",
    "title": "僵尸小屁孩",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0541.html"
  },
  {
    "id": "0542",
    "title": "黑道中人",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0542.html"
  },
  {
    "id": "0543",
    "title": "夜班",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0543.html"
  },
  {
    "id": "0544",
    "title": "新死亡游戏国语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0544.html"
  },
  {
    "id": "0545",
    "title": "天才麻将少女 全国篇",
    "year": "2014",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画青春",
    "url": "movie/movie-0545.html"
  },
  {
    "id": "0546",
    "title": "名校风暴第五季",
    "year": "2025",
    "region": "西班牙",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0546.html"
  },
  {
    "id": "0547",
    "title": "真情陌生人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0547.html"
  },
  {
    "id": "0548",
    "title": "医无可就",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0548.html"
  },
  {
    "id": "0549",
    "title": "英勇赞曲",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0549.html"
  },
  {
    "id": "0550",
    "title": "落第骑士英雄谭",
    "year": "2021",
    "region": "日本",
    "type": "动画",
    "category": "悬疑剧情",
    "url": "movie/movie-0550.html"
  },
  {
    "id": "0551",
    "title": "大决战！超奥特曼八兄弟",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0551.html"
  },
  {
    "id": "0552",
    "title": "使徒保禄",
    "year": "2025",
    "region": "意大利/美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0552.html"
  },
  {
    "id": "0553",
    "title": "你眼中的世界2014",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0553.html"
  },
  {
    "id": "0554",
    "title": "黑暗世界2",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0554.html"
  },
  {
    "id": "0555",
    "title": "义士艳史",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0555.html"
  },
  {
    "id": "0556",
    "title": "迈阿密特别行动",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0556.html"
  },
  {
    "id": "0557",
    "title": "死亡潜艇",
    "year": "2028",
    "region": "俄罗斯",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0557.html"
  },
  {
    "id": "0558",
    "title": "五月情歌",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0558.html"
  },
  {
    "id": "0559",
    "title": "盗墓笔记第一季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0559.html"
  },
  {
    "id": "0560",
    "title": "复兴之路",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0560.html"
  },
  {
    "id": "0561",
    "title": "克罗索巨兽",
    "year": "2025",
    "region": "西班牙/美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0561.html"
  },
  {
    "id": "0562",
    "title": "大江大河",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0562.html"
  },
  {
    "id": "0563",
    "title": "最远的你",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0563.html"
  },
  {
    "id": "0564",
    "title": "不可思议猫森林",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0564.html"
  },
  {
    "id": "0565",
    "title": "幽灵2023",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0565.html"
  },
  {
    "id": "0566",
    "title": "新婚公寓",
    "year": "2027",
    "region": "西班牙",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0566.html"
  },
  {
    "id": "0567",
    "title": "单思的世界",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0567.html"
  },
  {
    "id": "0568",
    "title": "小女花不弃",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0568.html"
  },
  {
    "id": "0569",
    "title": "巴尔扎克与小裁缝",
    "year": "2024",
    "region": "法国/中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0569.html"
  },
  {
    "id": "0570",
    "title": "鬼宫",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0570.html"
  },
  {
    "id": "0571",
    "title": "班亚和蕾雨",
    "year": "2023",
    "region": "中国台湾",
    "type": "Movie",
    "category": "经典年代",
    "url": "movie/movie-0571.html"
  },
  {
    "id": "0572",
    "title": "西域冒险记之神秘镜",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0572.html"
  },
  {
    "id": "0573",
    "title": "晴空浴血战",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0573.html"
  },
  {
    "id": "0574",
    "title": "圣山村谜局",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0574.html"
  },
  {
    "id": "0575",
    "title": "偶像有约",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0575.html"
  },
  {
    "id": "0576",
    "title": "青楼情孽",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0576.html"
  },
  {
    "id": "0577",
    "title": "亲爱的，我把我们缩小了",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0577.html"
  },
  {
    "id": "0578",
    "title": "苹果和虫子",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0578.html"
  },
  {
    "id": "0579",
    "title": "墓王之王",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0579.html"
  },
  {
    "id": "0580",
    "title": "生无怨、死无悔",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0580.html"
  },
  {
    "id": "0581",
    "title": "球拍少年团",
    "year": "2021",
    "region": "韩国",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-0581.html"
  },
  {
    "id": "0582",
    "title": "欲魔",
    "year": "1974",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0582.html"
  },
  {
    "id": "0583",
    "title": "紫禁秘录",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0583.html"
  },
  {
    "id": "0584",
    "title": "我的哥哥是独生子",
    "year": "2006",
    "region": "意大利",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0584.html"
  },
  {
    "id": "0585",
    "title": "高空飞行",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0585.html"
  },
  {
    "id": "0586",
    "title": "纳瓦荷",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0586.html"
  },
  {
    "id": "0587",
    "title": "借枪",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0587.html"
  },
  {
    "id": "0588",
    "title": "比基尼大屠杀",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0588.html"
  },
  {
    "id": "0589",
    "title": "金钱追杀令",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0589.html"
  },
  {
    "id": "0590",
    "title": "二战黑豹",
    "year": "2017",
    "region": "俄罗斯",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0590.html"
  },
  {
    "id": "0591",
    "title": "不曾忘记的承诺2",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0591.html"
  },
  {
    "id": "0592",
    "title": "圣母在上第三季",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0592.html"
  },
  {
    "id": "0593",
    "title": "爱德华八世的故事",
    "year": "1955",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0593.html"
  },
  {
    "id": "0594",
    "title": "罗斯威尔第四季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0594.html"
  },
  {
    "id": "0595",
    "title": "喜耕田的故事2",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0595.html"
  },
  {
    "id": "0596",
    "title": "未来玩具",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0596.html"
  },
  {
    "id": "0597",
    "title": "寄生灵",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0597.html"
  },
  {
    "id": "0598",
    "title": "草竖琴",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0598.html"
  },
  {
    "id": "0599",
    "title": "我们是共产主义省略号",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0599.html"
  },
  {
    "id": "0600",
    "title": "野性钻石",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0600.html"
  },
  {
    "id": "0601",
    "title": "尖叫屋大屠杀",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0601.html"
  },
  {
    "id": "0602",
    "title": "如果德川家康成为总理大臣",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-0602.html"
  },
  {
    "id": "0603",
    "title": "两条街道相遇的地方",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0603.html"
  },
  {
    "id": "0604",
    "title": "格杀密令",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0604.html"
  },
  {
    "id": "0605",
    "title": "冲出宁静号",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0605.html"
  },
  {
    "id": "0606",
    "title": "无缘无故",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0606.html"
  },
  {
    "id": "0607",
    "title": "你是最美",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0607.html"
  },
  {
    "id": "0608",
    "title": "新东京水上警察",
    "year": "2020",
    "region": "日本",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-0608.html"
  },
  {
    "id": "0609",
    "title": "黑色大丽花",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0609.html"
  },
  {
    "id": "0610",
    "title": "银河铁道999",
    "year": "1979",
    "region": "日本",
    "type": "电影 / 动画",
    "category": "高分片库",
    "url": "movie/movie-0610.html"
  },
  {
    "id": "0611",
    "title": "万恶淫为首",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0611.html"
  },
  {
    "id": "0612",
    "title": "名侦探柯南：贝克街的亡灵",
    "year": "2002",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0612.html"
  },
  {
    "id": "0613",
    "title": "荣耀青春",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0613.html"
  },
  {
    "id": "0614",
    "title": "亿人局之迪拜贱客",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0614.html"
  },
  {
    "id": "0615",
    "title": "弗雷斯诺",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0615.html"
  },
  {
    "id": "0616",
    "title": "落差",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0616.html"
  },
  {
    "id": "0617",
    "title": "沦落者之夜",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0617.html"
  },
  {
    "id": "0618",
    "title": "非洲俄瑞斯忒斯的札记",
    "year": "2026",
    "region": "法国/塞内加尔",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0618.html"
  },
  {
    "id": "0619",
    "title": "型男飞行日志",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0619.html"
  },
  {
    "id": "0620",
    "title": "柏林亚历山大广场",
    "year": "2026",
    "region": "德国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0620.html"
  },
  {
    "id": "0621",
    "title": "涅槃咒",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0621.html"
  },
  {
    "id": "0622",
    "title": "苗乡情",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0622.html"
  },
  {
    "id": "0623",
    "title": "没有线索",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0623.html"
  },
  {
    "id": "0624",
    "title": "大地母亲2018",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0624.html"
  },
  {
    "id": "0625",
    "title": "有钱特烦恼",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0625.html"
  },
  {
    "id": "0626",
    "title": "罗森",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0626.html"
  },
  {
    "id": "0627",
    "title": "促成奇迹的女人",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0627.html"
  },
  {
    "id": "0628",
    "title": "风声",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0628.html"
  },
  {
    "id": "0629",
    "title": "中国小鬼队",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0629.html"
  },
  {
    "id": "0630",
    "title": "杀机",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0630.html"
  },
  {
    "id": "0631",
    "title": "独家记忆番外之相信爱",
    "year": "2019",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "动画青春",
    "url": "movie/movie-0631.html"
  },
  {
    "id": "0632",
    "title": "内衣小舖",
    "year": "2015",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0632.html"
  },
  {
    "id": "0633",
    "title": "东京女子会",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0633.html"
  },
  {
    "id": "0634",
    "title": "神警郝万忠",
    "year": "2021",
    "region": "中国",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0634.html"
  },
  {
    "id": "0635",
    "title": "深夜的超自然公务员",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0635.html"
  },
  {
    "id": "0636",
    "title": "逃亡2025",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0636.html"
  },
  {
    "id": "0637",
    "title": "追捕迷宫杀手",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0637.html"
  },
  {
    "id": "0638",
    "title": "贼婆翻身记",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0638.html"
  },
  {
    "id": "0639",
    "title": "铁幕谍影",
    "year": "2014",
    "region": "美国 / 德国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0639.html"
  },
  {
    "id": "0640",
    "title": "侠义美英雄",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0640.html"
  },
  {
    "id": "0641",
    "title": "莫丽·哈特莉的驱魔",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0641.html"
  },
  {
    "id": "0642",
    "title": "雪花秘扇",
    "year": "2011",
    "region": "中国大陆 / 美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0642.html"
  },
  {
    "id": "0643",
    "title": "伪钞者之末路",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0643.html"
  },
  {
    "id": "0644",
    "title": "鬼玩人3：魔界英豪",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0644.html"
  },
  {
    "id": "0645",
    "title": "通灵王2021",
    "year": "2021",
    "region": "日本",
    "type": "动漫",
    "category": "喜剧家庭",
    "url": "movie/movie-0645.html"
  },
  {
    "id": "0646",
    "title": "莽荒纪之神魂剑",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0646.html"
  },
  {
    "id": "0647",
    "title": "历险小恐龙8",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0647.html"
  },
  {
    "id": "0648",
    "title": "勇者必胜",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0648.html"
  },
  {
    "id": "0649",
    "title": "与魔鬼同行",
    "year": "2024",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0649.html"
  },
  {
    "id": "0650",
    "title": "撒冷镇",
    "year": "2025",
    "region": "美国",
    "type": "限定剧",
    "category": "日韩风情",
    "url": "movie/movie-0650.html"
  },
  {
    "id": "0651",
    "title": "花仔多情粤语",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0651.html"
  },
  {
    "id": "0652",
    "title": "嗜血派对",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0652.html"
  },
  {
    "id": "0653",
    "title": "恋爱",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0653.html"
  },
  {
    "id": "0654",
    "title": "中华英雄",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0654.html"
  },
  {
    "id": "0655",
    "title": "魔法师归来：双面艾利克斯",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0655.html"
  },
  {
    "id": "0656",
    "title": "卧底女警",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0656.html"
  },
  {
    "id": "0657",
    "title": "疯狂靓妹仔",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0657.html"
  },
  {
    "id": "0658",
    "title": "转生成为魔剑了",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0658.html"
  },
  {
    "id": "0659",
    "title": "公园之夜",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0659.html"
  },
  {
    "id": "0660",
    "title": "兰心大剧院",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0660.html"
  },
  {
    "id": "0661",
    "title": "搭秋千的人",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0661.html"
  },
  {
    "id": "0662",
    "title": "神奇兵营42 第二季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0662.html"
  },
  {
    "id": "0663",
    "title": "上海异人娼馆",
    "year": "2021",
    "region": "中国香港/日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0663.html"
  },
  {
    "id": "0664",
    "title": "河岸杀手",
    "year": "2024",
    "region": "美国",
    "type": "电视剧 (8集)",
    "category": "悬疑剧情",
    "url": "movie/movie-0664.html"
  },
  {
    "id": "0665",
    "title": "流亡王妃",
    "year": "2025",
    "region": "韩国 / 中国大陆",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0665.html"
  },
  {
    "id": "0666",
    "title": "厄玛",
    "year": "2019",
    "region": "智利",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0666.html"
  },
  {
    "id": "0667",
    "title": "零之使魔第二季",
    "year": "2007",
    "region": "日本",
    "type": "TV剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0667.html"
  },
  {
    "id": "0668",
    "title": "穿白丝绸的女人",
    "year": "2006",
    "region": "越南",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0668.html"
  },
  {
    "id": "0669",
    "title": "高考那年遇见你",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0669.html"
  },
  {
    "id": "0670",
    "title": "吸血鬼骑士第二季",
    "year": "2014",
    "region": "日本",
    "type": "动画剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0670.html"
  },
  {
    "id": "0671",
    "title": "鬼语者第二季",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0671.html"
  },
  {
    "id": "0672",
    "title": "桃花命够",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0672.html"
  },
  {
    "id": "0673",
    "title": "亲仇记",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0673.html"
  },
  {
    "id": "0674",
    "title": "纳粹特工",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0674.html"
  },
  {
    "id": "0675",
    "title": "匿名爱情互助会",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0675.html"
  },
  {
    "id": "0676",
    "title": "帐篷外是欧洲5：意大利篇",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺 / 真人秀",
    "category": "日韩风情",
    "url": "movie/movie-0676.html"
  },
  {
    "id": "0677",
    "title": "龙纹身的女鬼入镜",
    "year": "2018",
    "region": "日本 / 瑞典",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0677.html"
  },
  {
    "id": "0678",
    "title": "合法伴侣",
    "year": "2020",
    "region": "英国 / 中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0678.html"
  },
  {
    "id": "0679",
    "title": "鬼斧逐个捉",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0679.html"
  },
  {
    "id": "0680",
    "title": "难以置信的爱",
    "year": "2016",
    "region": "印度",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0680.html"
  },
  {
    "id": "0681",
    "title": "英雄艳迹",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0681.html"
  },
  {
    "id": "0682",
    "title": "婚礼兄弟",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0682.html"
  },
  {
    "id": "0683",
    "title": "来自火星的恶魔女孩",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0683.html"
  },
  {
    "id": "0684",
    "title": "钢琴，独奏",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0684.html"
  },
  {
    "id": "0685",
    "title": "水电谜语",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0685.html"
  },
  {
    "id": "0686",
    "title": "怪物史莱克的万圣游戏",
    "year": "2010",
    "region": "美国",
    "type": "动画短片",
    "category": "高分片库",
    "url": "movie/movie-0686.html"
  },
  {
    "id": "0687",
    "title": "情场妙手",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0687.html"
  },
  {
    "id": "0688",
    "title": "寻找英玛褒曼",
    "year": "2025",
    "region": "瑞典 / 德国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0688.html"
  },
  {
    "id": "0689",
    "title": "夜读惊魂",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0689.html"
  },
  {
    "id": "0690",
    "title": "黑洞1979",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0690.html"
  },
  {
    "id": "0691",
    "title": "七侠归来",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0691.html"
  },
  {
    "id": "0692",
    "title": "迷局之拨云见日",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0692.html"
  },
  {
    "id": "0693",
    "title": "隔窗有眼",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0693.html"
  },
  {
    "id": "0694",
    "title": "突如其来",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0694.html"
  },
  {
    "id": "0695",
    "title": "假装看不见之电影大师",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0695.html"
  },
  {
    "id": "0696",
    "title": "杰罗姆的时光",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0696.html"
  },
  {
    "id": "0697",
    "title": "探长欧光慈",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0697.html"
  },
  {
    "id": "0698",
    "title": "路竞我择",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0698.html"
  },
  {
    "id": "0699",
    "title": "迷幻甜心",
    "year": "2011",
    "region": "法国/比利时",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0699.html"
  },
  {
    "id": "0700",
    "title": "启动了",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0700.html"
  },
  {
    "id": "0701",
    "title": "一百零一夜",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0701.html"
  },
  {
    "id": "0702",
    "title": "死亡博客",
    "year": "2009",
    "region": "中国台湾",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0702.html"
  },
  {
    "id": "0703",
    "title": "分居",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0703.html"
  },
  {
    "id": "0704",
    "title": "雨燕的坠落",
    "year": "2018",
    "region": "法国 / 比利时",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0704.html"
  },
  {
    "id": "0705",
    "title": "太平洋战争风云录",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0705.html"
  },
  {
    "id": "0706",
    "title": "魔诫追缉令",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0706.html"
  },
  {
    "id": "0707",
    "title": "光速蒙面侠21",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "华语热播",
    "url": "movie/movie-0707.html"
  },
  {
    "id": "0708",
    "title": "最后一次机会",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0708.html"
  },
  {
    "id": "0709",
    "title": "就算是爸爸，也想做",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0709.html"
  },
  {
    "id": "0710",
    "title": "深渊鲨难",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0710.html"
  },
  {
    "id": "0711",
    "title": "我的朋友很少第二季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0711.html"
  },
  {
    "id": "0712",
    "title": "无良医生：爱里藏刀",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0712.html"
  },
  {
    "id": "0713",
    "title": "错嫁",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-0713.html"
  },
  {
    "id": "0714",
    "title": "手稿不会燃烧",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0714.html"
  },
  {
    "id": "0715",
    "title": "同级生2",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0715.html"
  },
  {
    "id": "0716",
    "title": "我的司机",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0716.html"
  },
  {
    "id": "0717",
    "title": "猎人",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0717.html"
  },
  {
    "id": "0718",
    "title": "上流秘笈",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0718.html"
  },
  {
    "id": "0719",
    "title": "私房钱",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0719.html"
  },
  {
    "id": "0720",
    "title": "花予野兽 第二季",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0720.html"
  },
  {
    "id": "0721",
    "title": "灵欲春宵",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0721.html"
  },
  {
    "id": "0722",
    "title": "国家破产之日",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0722.html"
  },
  {
    "id": "0723",
    "title": "明月照沟渠",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0723.html"
  },
  {
    "id": "0724",
    "title": "流浪的心",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0724.html"
  },
  {
    "id": "0725",
    "title": "米小圈上学记 第三季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0725.html"
  },
  {
    "id": "0726",
    "title": "仙戒奇缘",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0726.html"
  },
  {
    "id": "0727",
    "title": "荒川爆笑团",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0727.html"
  },
  {
    "id": "0728",
    "title": "烈火干柴",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0728.html"
  },
  {
    "id": "0729",
    "title": "这才是王道",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0729.html"
  },
  {
    "id": "0730",
    "title": "再起风云国语",
    "year": "1991",
    "region": "中国香港",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-0730.html"
  },
  {
    "id": "0731",
    "title": "女巨人复仇记",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0731.html"
  },
  {
    "id": "0732",
    "title": "天堂圆舞曲",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0732.html"
  },
  {
    "id": "0733",
    "title": "风流海军",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0733.html"
  },
  {
    "id": "0734",
    "title": "爱娃",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0734.html"
  },
  {
    "id": "0735",
    "title": "我可能遇到了救星",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0735.html"
  },
  {
    "id": "0736",
    "title": "神游天地",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "category": "动作犯罪",
    "url": "movie/movie-0736.html"
  },
  {
    "id": "0737",
    "title": "狐蝠",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0737.html"
  },
  {
    "id": "0738",
    "title": "唐伯虎点秋香",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0738.html"
  },
  {
    "id": "0739",
    "title": "许纯纯的茶花运",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0739.html"
  },
  {
    "id": "0740",
    "title": "危情叛逆",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0740.html"
  },
  {
    "id": "0741",
    "title": "纸之月2023",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0741.html"
  },
  {
    "id": "0742",
    "title": "刀神粤语",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0742.html"
  },
  {
    "id": "0743",
    "title": "海军嬉春",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0743.html"
  },
  {
    "id": "0744",
    "title": "飞车载卿情",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0744.html"
  },
  {
    "id": "0745",
    "title": "鉴心",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0745.html"
  },
  {
    "id": "0746",
    "title": "从夺走你的那天起",
    "year": "2028",
    "region": "土耳其",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0746.html"
  },
  {
    "id": "0747",
    "title": "城市猎人粤语",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0747.html"
  },
  {
    "id": "0748",
    "title": "歌舞升平",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0748.html"
  },
  {
    "id": "0749",
    "title": "异形魔怪2",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0749.html"
  },
  {
    "id": "0750",
    "title": "黑暗收割",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0750.html"
  },
  {
    "id": "0751",
    "title": "恐惧中的恐惧",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0751.html"
  },
  {
    "id": "0752",
    "title": "这一生，至少当一次傻瓜",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0752.html"
  },
  {
    "id": "0753",
    "title": "新白蛇传",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0753.html"
  },
  {
    "id": "0754",
    "title": "水瓶女人心",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0754.html"
  },
  {
    "id": "0755",
    "title": "势不两立",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0755.html"
  },
  {
    "id": "0756",
    "title": "小奇迹",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0756.html"
  },
  {
    "id": "0757",
    "title": "狙魔教父",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0757.html"
  },
  {
    "id": "0758",
    "title": "023档案",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "category": "奇幻科幻",
    "url": "movie/movie-0758.html"
  },
  {
    "id": "0759",
    "title": "没有爱",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0759.html"
  },
  {
    "id": "0760",
    "title": "今生是第一次",
    "year": "2017",
    "region": "韩国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0760.html"
  },
  {
    "id": "0761",
    "title": "棋山传奇",
    "year": "1992",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0761.html"
  },
  {
    "id": "0762",
    "title": "危险职位",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0762.html"
  },
  {
    "id": "0763",
    "title": "想和你上床",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0763.html"
  },
  {
    "id": "0764",
    "title": "浪漫暴风圈",
    "year": "2021",
    "region": "韩国 / 日本",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0764.html"
  },
  {
    "id": "0765",
    "title": "准备好了",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0765.html"
  },
  {
    "id": "0766",
    "title": "美国犯罪故事 第二季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-0766.html"
  },
  {
    "id": "0767",
    "title": "天眼国语",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "高分片库",
    "url": "movie/movie-0767.html"
  },
  {
    "id": "0768",
    "title": "多少爱，可以重来",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0768.html"
  },
  {
    "id": "0769",
    "title": "禽兽超人之无奸不摧",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0769.html"
  },
  {
    "id": "0770",
    "title": "宠婚来袭第二季",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0770.html"
  },
  {
    "id": "0771",
    "title": "人龙传说之九龙壁",
    "year": "2023",
    "region": "中国大陆, 香港",
    "type": "网络电影",
    "category": "亚洲精选",
    "url": "movie/movie-0771.html"
  },
  {
    "id": "0772",
    "title": "钻孔者",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0772.html"
  },
  {
    "id": "0773",
    "title": "布基兰",
    "year": "2025",
    "region": "中国大陆 / 俄罗斯",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0773.html"
  },
  {
    "id": "0774",
    "title": "雪宝的从前从前",
    "year": "2023",
    "region": "美国",
    "type": "剧集 / 短片",
    "category": "动画青春",
    "url": "movie/movie-0774.html"
  },
  {
    "id": "0775",
    "title": "难以忘怀",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0775.html"
  },
  {
    "id": "0776",
    "title": "恐怖直播",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0776.html"
  },
  {
    "id": "0777",
    "title": "编辑情人梦",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0777.html"
  },
  {
    "id": "0778",
    "title": "一年级·大学季",
    "year": "2015",
    "region": "中国大陆",
    "type": "综艺 / 电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-0778.html"
  },
  {
    "id": "0779",
    "title": "凶邻",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0779.html"
  },
  {
    "id": "0780",
    "title": "柳山",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0780.html"
  },
  {
    "id": "0781",
    "title": "我制服了魔鬼",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0781.html"
  },
  {
    "id": "0782",
    "title": "钻石王牌第三季",
    "year": "2026",
    "region": "日本",
    "type": "TV 动画",
    "category": "日韩风情",
    "url": "movie/movie-0782.html"
  },
  {
    "id": "0783",
    "title": "那年那人那片花海",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0783.html"
  },
  {
    "id": "0784",
    "title": "战舰吕字号",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0784.html"
  },
  {
    "id": "0785",
    "title": "智多星妙计扭乾坤",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0785.html"
  },
  {
    "id": "0786",
    "title": "灵妖鉴之盘丝小仙",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "经典年代",
    "url": "movie/movie-0786.html"
  },
  {
    "id": "0787",
    "title": "超龙珠英雄",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0787.html"
  },
  {
    "id": "0788",
    "title": "金字塔游戏",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0788.html"
  },
  {
    "id": "0789",
    "title": "一路平安",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0789.html"
  },
  {
    "id": "0790",
    "title": "蜀山奇侠之仙侣奇缘国语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-0790.html"
  },
  {
    "id": "0791",
    "title": "拉卡",
    "year": "2025",
    "region": "南非 / 美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0791.html"
  },
  {
    "id": "0792",
    "title": "多甫拉托夫",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0792.html"
  },
  {
    "id": "0793",
    "title": "龙刀奇缘",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0793.html"
  },
  {
    "id": "0794",
    "title": "两不疑第二季",
    "year": "2022",
    "region": "中国大陆",
    "type": "动画",
    "category": "日韩风情",
    "url": "movie/movie-0794.html"
  },
  {
    "id": "0795",
    "title": "汉麻胜利",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0795.html"
  },
  {
    "id": "0796",
    "title": "海瑟",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0796.html"
  },
  {
    "id": "0797",
    "title": "萌犬好声音",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0797.html"
  },
  {
    "id": "0798",
    "title": "爱你不等来生",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0798.html"
  },
  {
    "id": "0799",
    "title": "史瑞克2",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0799.html"
  },
  {
    "id": "0800",
    "title": "物竞天择",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0800.html"
  },
  {
    "id": "0801",
    "title": "寻找罗尼",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0801.html"
  },
  {
    "id": "0802",
    "title": "一个人的皮影戏",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0802.html"
  },
  {
    "id": "0803",
    "title": "他们在相爱",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0803.html"
  },
  {
    "id": "0804",
    "title": "星际迷航3",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0804.html"
  },
  {
    "id": "0805",
    "title": "流氓皇帝1981粤语",
    "year": "1981",
    "region": "中国香港",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0805.html"
  },
  {
    "id": "0806",
    "title": "卡雅利沙的卡门",
    "year": "2025",
    "region": "南非",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0806.html"
  },
  {
    "id": "0807",
    "title": "福勒绝望剑",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0807.html"
  },
  {
    "id": "0808",
    "title": "爱在十字路口",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0808.html"
  },
  {
    "id": "0809",
    "title": "日无光心慌慌",
    "year": "2020",
    "region": "马来西亚",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0809.html"
  },
  {
    "id": "0810",
    "title": "礼仪师真假杀人事件",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0810.html"
  },
  {
    "id": "0811",
    "title": "战悚目击者",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0811.html"
  },
  {
    "id": "0812",
    "title": "下狗风云",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0812.html"
  },
  {
    "id": "0813",
    "title": "电影制片人",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0813.html"
  },
  {
    "id": "0814",
    "title": "你住在我心里",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0814.html"
  },
  {
    "id": "0815",
    "title": "斗罗大陆2绝世唐门第四季",
    "year": "2024",
    "region": "中国大陆",
    "type": "动漫",
    "category": "动画青春",
    "url": "movie/movie-0815.html"
  },
  {
    "id": "0816",
    "title": "耍叉",
    "year": "2006",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0816.html"
  },
  {
    "id": "0817",
    "title": "该死的顺序",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0817.html"
  },
  {
    "id": "0818",
    "title": "嗝嗝老师国语",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0818.html"
  },
  {
    "id": "0819",
    "title": "常绿树",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0819.html"
  },
  {
    "id": "0820",
    "title": "吸血鬼日记第六季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0820.html"
  },
  {
    "id": "0821",
    "title": "冥府守护犬",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0821.html"
  },
  {
    "id": "0822",
    "title": "海底娇娃蓝华",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0822.html"
  },
  {
    "id": "0823",
    "title": "飞上去，企鹅",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0823.html"
  },
  {
    "id": "0824",
    "title": "剪刀男",
    "year": "2005",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0824.html"
  },
  {
    "id": "0825",
    "title": "柯洛弗东京档案",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0825.html"
  },
  {
    "id": "0826",
    "title": "黑色蛋糕",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0826.html"
  },
  {
    "id": "0827",
    "title": "中国部门",
    "year": "2025",
    "region": "中国大陆",
    "type": "TV Series",
    "category": "经典年代",
    "url": "movie/movie-0827.html"
  },
  {
    "id": "0828",
    "title": "透视特写",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0828.html"
  },
  {
    "id": "0829",
    "title": "宾加西",
    "year": "2017",
    "region": "利比亚/意大利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0829.html"
  },
  {
    "id": "0830",
    "title": "心魔2020",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0830.html"
  },
  {
    "id": "0831",
    "title": "戏中奇缘",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0831.html"
  },
  {
    "id": "0832",
    "title": "爱国者行动",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0832.html"
  },
  {
    "id": "0833",
    "title": "威尔",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0833.html"
  },
  {
    "id": "0834",
    "title": "龙隐迷窟",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0834.html"
  },
  {
    "id": "0835",
    "title": "中元大餐",
    "year": "2025",
    "region": "中国台湾 / 新加坡",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0835.html"
  },
  {
    "id": "0836",
    "title": "厨房2024",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0836.html"
  },
  {
    "id": "0837",
    "title": "精灵宝可梦：洛奇亚爆诞",
    "year": "1999",
    "region": "日本",
    "type": "动画电影",
    "category": "经典年代",
    "url": "movie/movie-0837.html"
  },
  {
    "id": "0838",
    "title": "赏金猎手",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0838.html"
  },
  {
    "id": "0839",
    "title": "他乡的童年",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0839.html"
  },
  {
    "id": "0840",
    "title": "梅与小猫巴士",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0840.html"
  },
  {
    "id": "0841",
    "title": "一个唱，一个不唱",
    "year": "1977",
    "region": "法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0841.html"
  },
  {
    "id": "0842",
    "title": "柏林",
    "year": "2023",
    "region": "德国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0842.html"
  },
  {
    "id": "0843",
    "title": "无人行走",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0843.html"
  },
  {
    "id": "0844",
    "title": "到达挚爱",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0844.html"
  },
  {
    "id": "0845",
    "title": "飙城",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0845.html"
  },
  {
    "id": "0846",
    "title": "死了舅舅以后",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0846.html"
  },
  {
    "id": "0847",
    "title": "宝贝新官人",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0847.html"
  },
  {
    "id": "0848",
    "title": "芭比之花仙子",
    "year": "2023",
    "region": "美国",
    "type": "电影 / 动画",
    "category": "高分片库",
    "url": "movie/movie-0848.html"
  },
  {
    "id": "0849",
    "title": "三国的星空第一部",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0849.html"
  },
  {
    "id": "0850",
    "title": "不良家庭",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0850.html"
  },
  {
    "id": "0851",
    "title": "封城杀戮",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0851.html"
  },
  {
    "id": "0852",
    "title": "山海伏魔录",
    "year": "2024",
    "region": "中国大陆",
    "type": "奇幻电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0852.html"
  },
  {
    "id": "0853",
    "title": "火力少年王3",
    "year": "2026",
    "region": "中国",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0853.html"
  },
  {
    "id": "0854",
    "title": "孵化",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0854.html"
  },
  {
    "id": "0855",
    "title": "在一起的日子",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0855.html"
  },
  {
    "id": "0856",
    "title": "崖上的波妞",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0856.html"
  },
  {
    "id": "0857",
    "title": "野兽天堂",
    "year": "2025",
    "region": "巴西",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0857.html"
  },
  {
    "id": "0858",
    "title": "父亲的信徒",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0858.html"
  },
  {
    "id": "0859",
    "title": "决战撒哈拉",
    "year": "2020",
    "region": "法国, 摩洛哥",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0859.html"
  },
  {
    "id": "0860",
    "title": "消失的西德尼·豪尔",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0860.html"
  },
  {
    "id": "0861",
    "title": "石器小英雄",
    "year": "2018",
    "region": "英国",
    "type": "动画电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0861.html"
  },
  {
    "id": "0862",
    "title": "汉娜格蕾丝的着魔",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0862.html"
  },
  {
    "id": "0863",
    "title": "我老婆是老大2",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0863.html"
  },
  {
    "id": "0864",
    "title": "断袖男",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0864.html"
  },
  {
    "id": "0865",
    "title": "魔游纪6：一瞬决战",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "动画青春",
    "url": "movie/movie-0865.html"
  },
  {
    "id": "0866",
    "title": "吉祥物",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0866.html"
  },
  {
    "id": "0867",
    "title": "风云际会",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0867.html"
  },
  {
    "id": "0868",
    "title": "新人歌手曹政奭",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-0868.html"
  },
  {
    "id": "0869",
    "title": "南海奇侠",
    "year": "1993",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0869.html"
  },
  {
    "id": "0870",
    "title": "遗愿清单",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0870.html"
  },
  {
    "id": "0871",
    "title": "理发店情缘",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0871.html"
  },
  {
    "id": "0872",
    "title": "四大杀手",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0872.html"
  },
  {
    "id": "0873",
    "title": "奇怪的新世界",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0873.html"
  },
  {
    "id": "0874",
    "title": "奥维尔号第三季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0874.html"
  },
  {
    "id": "0875",
    "title": "极品妈妈",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0875.html"
  },
  {
    "id": "0876",
    "title": "金鹿",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0876.html"
  },
  {
    "id": "0877",
    "title": "生命骑士",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0877.html"
  },
  {
    "id": "0878",
    "title": "梨花错",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0878.html"
  },
  {
    "id": "0879",
    "title": "英雄崛起：秘密勇士",
    "year": "2024",
    "region": "美国",
    "type": "电影 / 动画",
    "category": "亚洲精选",
    "url": "movie/movie-0879.html"
  },
  {
    "id": "0880",
    "title": "梦游者",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0880.html"
  },
  {
    "id": "0881",
    "title": "野兽群",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0881.html"
  },
  {
    "id": "0882",
    "title": "乡下仔播音",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0882.html"
  },
  {
    "id": "0883",
    "title": "我的爱人．你的死神",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0883.html"
  },
  {
    "id": "0884",
    "title": "痴心女子",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0884.html"
  },
  {
    "id": "0885",
    "title": "白箱 剧场版",
    "year": "2020",
    "region": "日本",
    "type": "动画电影",
    "category": "动画青春",
    "url": "movie/movie-0885.html"
  },
  {
    "id": "0886",
    "title": "欢迎来到驹田蒸馏所",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0886.html"
  },
  {
    "id": "0887",
    "title": "东野圭吾推理系列",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0887.html"
  },
  {
    "id": "0888",
    "title": "喜欢你我也是第一季",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "动作犯罪",
    "url": "movie/movie-0888.html"
  },
  {
    "id": "0889",
    "title": "哭声国语",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0889.html"
  },
  {
    "id": "0890",
    "title": "好兵帅克",
    "year": "1957",
    "region": "捷克斯洛伐克",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0890.html"
  },
  {
    "id": "0891",
    "title": "愚公移山",
    "year": "2028",
    "region": "中国大陆",
    "type": "动画电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0891.html"
  },
  {
    "id": "0892",
    "title": "偶像梦幻祭",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-0892.html"
  },
  {
    "id": "0893",
    "title": "蛇鹤八步",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0893.html"
  },
  {
    "id": "0894",
    "title": "命运九重奏",
    "year": "2016",
    "region": "日本",
    "type": "TV Series",
    "category": "奇幻科幻",
    "url": "movie/movie-0894.html"
  },
  {
    "id": "0895",
    "title": "没问题先生",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0895.html"
  },
  {
    "id": "0896",
    "title": "双面宠妃闯关记",
    "year": "2023",
    "region": "中国内地",
    "type": "网络短剧",
    "category": "悬疑剧情",
    "url": "movie/movie-0896.html"
  },
  {
    "id": "0897",
    "title": "威廉姆斯",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0897.html"
  },
  {
    "id": "0898",
    "title": "忧郁的物怪庵第一季",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "category": "日韩风情",
    "url": "movie/movie-0898.html"
  },
  {
    "id": "0899",
    "title": "猫狗大战3：爪爪集结！",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0899.html"
  },
  {
    "id": "0900",
    "title": "六人晚餐",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0900.html"
  },
  {
    "id": "0901",
    "title": "校园赛车手",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0901.html"
  },
  {
    "id": "0902",
    "title": "男人的儿子",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0902.html"
  },
  {
    "id": "0903",
    "title": "宫殿大饭店",
    "year": "2023",
    "region": "法国 / 德国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0903.html"
  },
  {
    "id": "0904",
    "title": "一个女人的选择",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0904.html"
  },
  {
    "id": "0905",
    "title": "唔死呃德人",
    "year": "2015",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0905.html"
  },
  {
    "id": "0906",
    "title": "非正式会谈第七季",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "动作犯罪",
    "url": "movie/movie-0906.html"
  },
  {
    "id": "0907",
    "title": "暮光之城：破晓Ⅰ",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0907.html"
  },
  {
    "id": "0908",
    "title": "生日快乐",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0908.html"
  },
  {
    "id": "0909",
    "title": "办公室的浪漫",
    "year": "2021",
    "region": "韩国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0909.html"
  },
  {
    "id": "0910",
    "title": "诗",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0910.html"
  },
  {
    "id": "0911",
    "title": "百变飞车",
    "year": "1998",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0911.html"
  },
  {
    "id": "0912",
    "title": "温莎大道",
    "year": "2025",
    "region": "中国香港/英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0912.html"
  },
  {
    "id": "0913",
    "title": "塔格特",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-0913.html"
  },
  {
    "id": "0914",
    "title": "玉米田的小孩6",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0914.html"
  },
  {
    "id": "0915",
    "title": "切尔西大墙",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0915.html"
  },
  {
    "id": "0916",
    "title": "索比堡",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0916.html"
  },
  {
    "id": "0917",
    "title": "告别往事",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0917.html"
  },
  {
    "id": "0918",
    "title": "暴走妈妈",
    "year": "2022",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-0918.html"
  },
  {
    "id": "0919",
    "title": "脱欧：无理之战",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0919.html"
  },
  {
    "id": "0920",
    "title": "罗莎的机会",
    "year": "2018",
    "region": "西班牙",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0920.html"
  },
  {
    "id": "0921",
    "title": "新燕子李三2013",
    "year": "2013",
    "region": "中国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0921.html"
  },
  {
    "id": "0922",
    "title": "未知物",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0922.html"
  },
  {
    "id": "0923",
    "title": "错误行动",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0923.html"
  },
  {
    "id": "0924",
    "title": "欢迎来到蘑菇屋",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0924.html"
  },
  {
    "id": "0925",
    "title": "岁岁有余年",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0925.html"
  },
  {
    "id": "0926",
    "title": "天鹰复仇记",
    "year": "2024",
    "region": "意大利 / 美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0926.html"
  },
  {
    "id": "0927",
    "title": "暴风圈",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0927.html"
  },
  {
    "id": "0928",
    "title": "性爱魔法",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0928.html"
  },
  {
    "id": "0929",
    "title": "上天下地大追击",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0929.html"
  },
  {
    "id": "0930",
    "title": "如你那般微笑",
    "year": "2019",
    "region": "泰国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0930.html"
  },
  {
    "id": "0931",
    "title": "霓虹心",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0931.html"
  },
  {
    "id": "0932",
    "title": "恋爱暴击",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0932.html"
  },
  {
    "id": "0933",
    "title": "结社大作战",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-0933.html"
  },
  {
    "id": "0934",
    "title": "追凶20年国语",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0934.html"
  },
  {
    "id": "0935",
    "title": "七嫂告状",
    "year": "1998",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-0935.html"
  },
  {
    "id": "0936",
    "title": "入土未为安",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0936.html"
  },
  {
    "id": "0937",
    "title": "火锅传奇",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0937.html"
  },
  {
    "id": "0938",
    "title": "海德女士",
    "year": "2018",
    "region": "法国/比利时",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0938.html"
  },
  {
    "id": "0939",
    "title": "鞋店事务所 第一季",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0939.html"
  },
  {
    "id": "0940",
    "title": "匍匐求生",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0940.html"
  },
  {
    "id": "0941",
    "title": "亚当与狗",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0941.html"
  },
  {
    "id": "0942",
    "title": "歌舞飞扬",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0942.html"
  },
  {
    "id": "0943",
    "title": "大楼里只有谋杀第四季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-0943.html"
  },
  {
    "id": "0944",
    "title": "淑比狗和食尸鬼学校",
    "year": "2023",
    "region": "美国",
    "type": "动画剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0944.html"
  },
  {
    "id": "0945",
    "title": "奔跑吧·黄河篇",
    "year": "2020",
    "region": "中国大陆",
    "type": "综艺",
    "category": "动画青春",
    "url": "movie/movie-0945.html"
  },
  {
    "id": "0946",
    "title": "士兵的心上人",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0946.html"
  },
  {
    "id": "0947",
    "title": "雾里的铁道员",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0947.html"
  },
  {
    "id": "0948",
    "title": "我们遇上松花湖",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0948.html"
  },
  {
    "id": "0949",
    "title": "博士之日",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0949.html"
  },
  {
    "id": "0950",
    "title": "花木兰1964国语",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0950.html"
  },
  {
    "id": "0951",
    "title": "秘书俱乐部",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0951.html"
  },
  {
    "id": "0952",
    "title": "死亡音乐",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0952.html"
  },
  {
    "id": "0953",
    "title": "长夜",
    "year": "2024",
    "region": "挪威",
    "type": "惊悚、剧情",
    "category": "喜剧家庭",
    "url": "movie/movie-0953.html"
  },
  {
    "id": "0954",
    "title": "怒",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0954.html"
  },
  {
    "id": "0955",
    "title": "快乐大本营2013",
    "year": "2013",
    "region": "中国大陆",
    "type": "综艺",
    "category": "动画青春",
    "url": "movie/movie-0955.html"
  },
  {
    "id": "0956",
    "title": "火星坏女孩",
    "year": "2030",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0956.html"
  },
  {
    "id": "0957",
    "title": "那些老爸没教的事",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-0957.html"
  },
  {
    "id": "0958",
    "title": "大麻烦家",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0958.html"
  },
  {
    "id": "0959",
    "title": "机器肉鸡第七季",
    "year": "2014",
    "region": "美国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-0959.html"
  },
  {
    "id": "0960",
    "title": "蜡笔小新第八季",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画青春",
    "url": "movie/movie-0960.html"
  },
  {
    "id": "0961",
    "title": "赤裸吸血鬼",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0961.html"
  },
  {
    "id": "0962",
    "title": "独立纵队",
    "year": "2012",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-0962.html"
  },
  {
    "id": "0963",
    "title": "姬蒂的秘密",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0963.html"
  },
  {
    "id": "0964",
    "title": "她很漂亮",
    "year": "2022",
    "region": "韩国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-0964.html"
  },
  {
    "id": "0965",
    "title": "哭泣女人的诅咒",
    "year": "2025",
    "region": "墨西哥/美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0965.html"
  },
  {
    "id": "0966",
    "title": "未了情粤语",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-0966.html"
  },
  {
    "id": "0967",
    "title": "蓝风筝",
    "year": "1993",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0967.html"
  },
  {
    "id": "0968",
    "title": "黄金时代1946",
    "year": "1946",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0968.html"
  },
  {
    "id": "0969",
    "title": "郁金香狂潮",
    "year": "2025",
    "region": "荷兰",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0969.html"
  },
  {
    "id": "0970",
    "title": "落第秀才",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0970.html"
  },
  {
    "id": "0971",
    "title": "得心拳手",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0971.html"
  },
  {
    "id": "0972",
    "title": "凡躯的福音",
    "year": "1962",
    "region": "法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0972.html"
  },
  {
    "id": "0973",
    "title": "女教徒",
    "year": "1966",
    "region": "法国 / 西德",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0973.html"
  },
  {
    "id": "0974",
    "title": "豆花依旧笑春风",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-0974.html"
  },
  {
    "id": "0975",
    "title": "最美",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0975.html"
  },
  {
    "id": "0976",
    "title": "谁在这个城市",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0976.html"
  },
  {
    "id": "0977",
    "title": "现代奇航",
    "year": "2025",
    "region": "美国 / 法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0977.html"
  },
  {
    "id": "0978",
    "title": "情谜睡美人",
    "year": "2019",
    "region": "中国",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-0978.html"
  },
  {
    "id": "0979",
    "title": "责任",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0979.html"
  },
  {
    "id": "0980",
    "title": "绝路逢生",
    "year": "2018",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-0980.html"
  },
  {
    "id": "0981",
    "title": "乡村风云",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-0981.html"
  },
  {
    "id": "0982",
    "title": "后会无期",
    "year": "2014",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-0982.html"
  },
  {
    "id": "0983",
    "title": "剩女约瑟芬国语",
    "year": "2016",
    "region": "中国大陆 / 法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0983.html"
  },
  {
    "id": "0984",
    "title": "蒂奇伯恩的索赔",
    "year": "1998",
    "region": "英国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0984.html"
  },
  {
    "id": "0985",
    "title": "八美图",
    "year": "2002",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-0985.html"
  },
  {
    "id": "0986",
    "title": "死神降临",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-0986.html"
  },
  {
    "id": "0987",
    "title": "漫长的告别2019",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0987.html"
  },
  {
    "id": "0988",
    "title": "玉面虎雄霸谍海",
    "year": "1988",
    "region": "中国香港",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-0988.html"
  },
  {
    "id": "0989",
    "title": "亲爱的爸爸",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-0989.html"
  },
  {
    "id": "0990",
    "title": "还有明天2023",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0990.html"
  },
  {
    "id": "0991",
    "title": "我爱卡通人",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-0991.html"
  },
  {
    "id": "0992",
    "title": "水果硬糖",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-0992.html"
  },
  {
    "id": "0993",
    "title": "偷情彩凤",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-0993.html"
  },
  {
    "id": "0994",
    "title": "香槟",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0994.html"
  },
  {
    "id": "0995",
    "title": "夫人2025",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0995.html"
  },
  {
    "id": "0996",
    "title": "食女",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-0996.html"
  },
  {
    "id": "0997",
    "title": "心的羽毛",
    "year": "2022",
    "region": "泰国 / 中国台湾",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-0997.html"
  },
  {
    "id": "0998",
    "title": "火爆教头",
    "year": "1994",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-0998.html"
  },
  {
    "id": "0999",
    "title": "深海大搜索",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-0999.html"
  },
  {
    "id": "1000",
    "title": "史第科",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1000.html"
  },
  {
    "id": "1001",
    "title": "幸福的话就拍拍手",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1001.html"
  },
  {
    "id": "1002",
    "title": "真爱一世情",
    "year": "1990",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1002.html"
  },
  {
    "id": "1003",
    "title": "防线—爆弹危机",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1003.html"
  },
  {
    "id": "1004",
    "title": "野蛮奶奶大战戈师奶国语",
    "year": "2008",
    "region": "中国香港",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1004.html"
  },
  {
    "id": "1005",
    "title": "鸟人大作战",
    "year": "2023",
    "region": "日本",
    "type": "TV动画剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1005.html"
  },
  {
    "id": "1006",
    "title": "犬饲先生养狗记",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1006.html"
  },
  {
    "id": "1007",
    "title": "恶警蛋碎",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1007.html"
  },
  {
    "id": "1008",
    "title": "新·假面骑士2023",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1008.html"
  },
  {
    "id": "1009",
    "title": "全息游戏：恋爱世界",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1009.html"
  },
  {
    "id": "1010",
    "title": "爱，你想说什么",
    "year": "2022",
    "region": "中国",
    "type": "爱情电影",
    "category": "经典年代",
    "url": "movie/movie-1010.html"
  },
  {
    "id": "1011",
    "title": "血色通道",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1011.html"
  },
  {
    "id": "1012",
    "title": "捍卫公理",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1012.html"
  },
  {
    "id": "1013",
    "title": "神话任务第四季",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1013.html"
  },
  {
    "id": "1014",
    "title": "勇气",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1014.html"
  },
  {
    "id": "1015",
    "title": "邪恶之屋",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1015.html"
  },
  {
    "id": "1016",
    "title": "长江浴血战",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1016.html"
  },
  {
    "id": "1017",
    "title": "昨日英雄",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1017.html"
  },
  {
    "id": "1018",
    "title": "不知名的季节",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1018.html"
  },
  {
    "id": "1019",
    "title": "玩火之风",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1019.html"
  },
  {
    "id": "1020",
    "title": "友‧舞‧爱",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1020.html"
  },
  {
    "id": "1021",
    "title": "情迷佳人",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1021.html"
  },
  {
    "id": "1022",
    "title": "你是我心中的太阳",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1022.html"
  },
  {
    "id": "1023",
    "title": "狂欢三宝电影:娃克的愿望",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1023.html"
  },
  {
    "id": "1024",
    "title": "艳贼历险记",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1024.html"
  },
  {
    "id": "1025",
    "title": "风火飞轮",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1025.html"
  },
  {
    "id": "1026",
    "title": "瘦子",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1026.html"
  },
  {
    "id": "1027",
    "title": "西线平魔",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1027.html"
  },
  {
    "id": "1028",
    "title": "荒漠争霸战",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1028.html"
  },
  {
    "id": "1029",
    "title": "凸槌俏女警",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1029.html"
  },
  {
    "id": "1030",
    "title": "三夜情",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1030.html"
  },
  {
    "id": "1031",
    "title": "欢乐情缘",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1031.html"
  },
  {
    "id": "1032",
    "title": "恶棍之都",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1032.html"
  },
  {
    "id": "1033",
    "title": "系统逼我做皇后第四季",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "经典年代",
    "url": "movie/movie-1033.html"
  },
  {
    "id": "1034",
    "title": "哈罗德史密斯外传",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1034.html"
  },
  {
    "id": "1035",
    "title": "脱线帝国",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1035.html"
  },
  {
    "id": "1036",
    "title": "我叫布萨芭国语",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1036.html"
  },
  {
    "id": "1037",
    "title": "北非海岸",
    "year": "2015",
    "region": "法国 / 摩洛哥",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1037.html"
  },
  {
    "id": "1038",
    "title": "爱得团团转",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1038.html"
  },
  {
    "id": "1039",
    "title": "俄国佬",
    "year": "2005",
    "region": "俄罗斯",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1039.html"
  },
  {
    "id": "1040",
    "title": "飞燕金枪",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1040.html"
  },
  {
    "id": "1041",
    "title": "选个家来爱",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1041.html"
  },
  {
    "id": "1042",
    "title": "倩女幽魂1960国语",
    "year": "1960",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1042.html"
  },
  {
    "id": "1043",
    "title": "查尔斯三世",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1043.html"
  },
  {
    "id": "1044",
    "title": "杀手47",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1044.html"
  },
  {
    "id": "1045",
    "title": "天下第一楼",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1045.html"
  },
  {
    "id": "1046",
    "title": "使命召唤",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1046.html"
  },
  {
    "id": "1047",
    "title": "吞噬星空剧场版",
    "year": "2024",
    "region": "中国",
    "type": "剧场版",
    "category": "动作犯罪",
    "url": "movie/movie-1047.html"
  },
  {
    "id": "1048",
    "title": "英雄诀",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1048.html"
  },
  {
    "id": "1049",
    "title": "在沉默中效力",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1049.html"
  },
  {
    "id": "1050",
    "title": "国境线",
    "year": "2022",
    "region": "中国大陆",
    "type": "谍战电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1050.html"
  },
  {
    "id": "1051",
    "title": "库宾一家人",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1051.html"
  },
  {
    "id": "1052",
    "title": "等一下，棒球部！",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1052.html"
  },
  {
    "id": "1053",
    "title": "一位名叫查理·布朗的男孩",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1053.html"
  },
  {
    "id": "1054",
    "title": "女神大人",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1054.html"
  },
  {
    "id": "1055",
    "title": "扎拉瓦",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1055.html"
  },
  {
    "id": "1056",
    "title": "灵案神捕之东瀛魅影",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1056.html"
  },
  {
    "id": "1057",
    "title": "阿卡丁先生",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1057.html"
  },
  {
    "id": "1058",
    "title": "江阴要塞",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1058.html"
  },
  {
    "id": "1059",
    "title": "宇宙护卫队：风暴力量",
    "year": "2025",
    "region": "美国 / 中国大陆",
    "type": "动画电影",
    "category": "高分片库",
    "url": "movie/movie-1059.html"
  },
  {
    "id": "1060",
    "title": "刺客教条：权势",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1060.html"
  },
  {
    "id": "1061",
    "title": "热诚传说：导师的黎明",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1061.html"
  },
  {
    "id": "1062",
    "title": "镜中影",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1062.html"
  },
  {
    "id": "1063",
    "title": "噗哔啵～来自未来～",
    "year": "2024",
    "region": "日本",
    "type": "TV剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1063.html"
  },
  {
    "id": "1064",
    "title": "我叫赵甲第第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1064.html"
  },
  {
    "id": "1065",
    "title": "色欲怪谈",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1065.html"
  },
  {
    "id": "1066",
    "title": "极冻邪恶",
    "year": "2026",
    "region": "加拿大",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1066.html"
  },
  {
    "id": "1067",
    "title": "他在窥着你",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1067.html"
  },
  {
    "id": "1068",
    "title": "玩命特攻：武演行动",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1068.html"
  },
  {
    "id": "1069",
    "title": "幸福草",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1069.html"
  },
  {
    "id": "1070",
    "title": "牢笼",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1070.html"
  },
  {
    "id": "1071",
    "title": "哲基尔岛的阴谋",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1071.html"
  },
  {
    "id": "1072",
    "title": "沔州烽火",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1072.html"
  },
  {
    "id": "1073",
    "title": "两个遥远的陌生人",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1073.html"
  },
  {
    "id": "1074",
    "title": "说100万次就好了",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1074.html"
  },
  {
    "id": "1075",
    "title": "小乌龟富兰克林又开学了",
    "year": "2023",
    "region": "加拿大",
    "type": "动画剧集",
    "category": "高分片库",
    "url": "movie/movie-1075.html"
  },
  {
    "id": "1076",
    "title": "泪洒红城",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1076.html"
  },
  {
    "id": "1077",
    "title": "百妖传之九天玄玉",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1077.html"
  },
  {
    "id": "1078",
    "title": "学生兵",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1078.html"
  },
  {
    "id": "1079",
    "title": "后备箱惊魂",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1079.html"
  },
  {
    "id": "1080",
    "title": "夜行怪物",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1080.html"
  },
  {
    "id": "1081",
    "title": "血肉至亲",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1081.html"
  },
  {
    "id": "1082",
    "title": "科拉尔金矿",
    "year": "2018",
    "region": "印度",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1082.html"
  },
  {
    "id": "1083",
    "title": "火云邪神之修罗面具",
    "year": "2025",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1083.html"
  },
  {
    "id": "1084",
    "title": "圣罪",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1084.html"
  },
  {
    "id": "1085",
    "title": "双面女人",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1085.html"
  },
  {
    "id": "1086",
    "title": "新亚马逊河历险记",
    "year": "2026",
    "region": "巴西 / 美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1086.html"
  },
  {
    "id": "1087",
    "title": "矫枉过正",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1087.html"
  },
  {
    "id": "1088",
    "title": "富贵吉祥",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1088.html"
  },
  {
    "id": "1089",
    "title": "泰王纳黎萱5",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1089.html"
  },
  {
    "id": "1090",
    "title": "生活万岁！",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1090.html"
  },
  {
    "id": "1091",
    "title": "传闻中的女人",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1091.html"
  },
  {
    "id": "1092",
    "title": "恐龙物语: 回到未来",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1092.html"
  },
  {
    "id": "1093",
    "title": "长夜开拓者",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1093.html"
  },
  {
    "id": "1094",
    "title": "花都奇男子",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1094.html"
  },
  {
    "id": "1095",
    "title": "今夜我属于你",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1095.html"
  },
  {
    "id": "1096",
    "title": "雷神梭尔：爱与雷电",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1096.html"
  },
  {
    "id": "1097",
    "title": "破晓时分2019",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1097.html"
  },
  {
    "id": "1098",
    "title": "魔物娘的同居日常",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1098.html"
  },
  {
    "id": "1099",
    "title": "步步危机",
    "year": "2024",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1099.html"
  },
  {
    "id": "1100",
    "title": "疯狂电影人2",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1100.html"
  },
  {
    "id": "1101",
    "title": "蒙塔纳亚马逊",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1101.html"
  },
  {
    "id": "1102",
    "title": "谁在阻止我们",
    "year": "2024",
    "region": "波兰",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1102.html"
  },
  {
    "id": "1103",
    "title": "清官难审",
    "year": "1996",
    "region": "中国香港",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1103.html"
  },
  {
    "id": "1104",
    "title": "这！就是世界波",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "动作犯罪",
    "url": "movie/movie-1104.html"
  },
  {
    "id": "1105",
    "title": "多梦女孩",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1105.html"
  },
  {
    "id": "1106",
    "title": "次日危机",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1106.html"
  },
  {
    "id": "1107",
    "title": "一度销魂",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1107.html"
  },
  {
    "id": "1108",
    "title": "九州缥缈录",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1108.html"
  },
  {
    "id": "1109",
    "title": "混合宿舍3：破坏性爱规则",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1109.html"
  },
  {
    "id": "1110",
    "title": "恐惧之屋",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1110.html"
  },
  {
    "id": "1111",
    "title": "遗失在火中的记忆",
    "year": "2026",
    "region": "法国 / 加拿大",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1111.html"
  },
  {
    "id": "1112",
    "title": "雷速登闪电冲线2",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1112.html"
  },
  {
    "id": "1113",
    "title": "如果我是男生",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1113.html"
  },
  {
    "id": "1114",
    "title": "伊敦传奇第一季",
    "year": "2025",
    "region": "英国/美国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1114.html"
  },
  {
    "id": "1115",
    "title": "向风而行",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1115.html"
  },
  {
    "id": "1116",
    "title": "一江春水",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1116.html"
  },
  {
    "id": "1117",
    "title": "一级玩家",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1117.html"
  },
  {
    "id": "1118",
    "title": "哥斯拉2：怪兽之王",
    "year": "2024",
    "region": "美国 / 日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1118.html"
  },
  {
    "id": "1119",
    "title": "我们的世界",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1119.html"
  },
  {
    "id": "1120",
    "title": "灵能百分百",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "经典年代",
    "url": "movie/movie-1120.html"
  },
  {
    "id": "1121",
    "title": "她其实没那么坏",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1121.html"
  },
  {
    "id": "1122",
    "title": "两万种蜜蜂",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1122.html"
  },
  {
    "id": "1123",
    "title": "强运烧肉馔",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1123.html"
  },
  {
    "id": "1124",
    "title": "小迷糊天翻地覆",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1124.html"
  },
  {
    "id": "1125",
    "title": "奇迹",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1125.html"
  },
  {
    "id": "1126",
    "title": "异形帝国",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1126.html"
  },
  {
    "id": "1127",
    "title": "荒岛魔咒",
    "year": "2017",
    "region": "泰国",
    "type": "惊悚冒险电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1127.html"
  },
  {
    "id": "1128",
    "title": "前线",
    "year": "2023",
    "region": "乌克兰",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1128.html"
  },
  {
    "id": "1129",
    "title": "乌托邦2024",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1129.html"
  },
  {
    "id": "1130",
    "title": "新灵犬莱西",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1130.html"
  },
  {
    "id": "1131",
    "title": "你在光影阑珊处",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1131.html"
  },
  {
    "id": "1132",
    "title": "少年包青天第一部",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1132.html"
  },
  {
    "id": "1133",
    "title": "帅劲十足",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1133.html"
  },
  {
    "id": "1134",
    "title": "好雨知时节",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1134.html"
  },
  {
    "id": "1135",
    "title": "雪之女王",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1135.html"
  },
  {
    "id": "1136",
    "title": "天师斗僵尸续集",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1136.html"
  },
  {
    "id": "1137",
    "title": "老豆唔知仔心肝",
    "year": "2005",
    "region": "中国香港",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1137.html"
  },
  {
    "id": "1138",
    "title": "陌路相逢",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1138.html"
  },
  {
    "id": "1139",
    "title": "当真爱来敲门",
    "year": "2025",
    "region": "台湾地区(中国)",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1139.html"
  },
  {
    "id": "1140",
    "title": "妈妈加我等于十",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1140.html"
  },
  {
    "id": "1141",
    "title": "庭审专家第五季",
    "year": "2021",
    "region": "美国",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1141.html"
  },
  {
    "id": "1142",
    "title": "征途漫漫",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1142.html"
  },
  {
    "id": "1143",
    "title": "光荣之旅",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1143.html"
  },
  {
    "id": "1144",
    "title": "圣诞颂歌2009",
    "year": "2009",
    "region": "英国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1144.html"
  },
  {
    "id": "1145",
    "title": "我的邻居睡不着",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1145.html"
  },
  {
    "id": "1146",
    "title": "最好的青春",
    "year": "2023",
    "region": "意大利",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1146.html"
  },
  {
    "id": "1147",
    "title": "赫米娅与海伦娜",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1147.html"
  },
  {
    "id": "1148",
    "title": "维也纳和鬼魂乐队",
    "year": "2025",
    "region": "奥地利",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1148.html"
  },
  {
    "id": "1149",
    "title": "许愿神龙",
    "year": "2021",
    "region": "中国大陆, 美国",
    "type": "电影 / 动画",
    "category": "高分片库",
    "url": "movie/movie-1149.html"
  },
  {
    "id": "1150",
    "title": "针刺",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1150.html"
  },
  {
    "id": "1151",
    "title": "坏种2",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1151.html"
  },
  {
    "id": "1152",
    "title": "死神少爷与黑女仆第二季",
    "year": "2026",
    "region": "日本",
    "type": "动画",
    "category": "喜剧家庭",
    "url": "movie/movie-1152.html"
  },
  {
    "id": "1153",
    "title": "黑子的篮球第三季",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1153.html"
  },
  {
    "id": "1154",
    "title": "井盖儿",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1154.html"
  },
  {
    "id": "1155",
    "title": "100样东西",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1155.html"
  },
  {
    "id": "1156",
    "title": "求偶记",
    "year": "2015",
    "region": "中国台湾",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1156.html"
  },
  {
    "id": "1157",
    "title": "双雄喋血",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1157.html"
  },
  {
    "id": "1158",
    "title": "水形物语国语",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1158.html"
  },
  {
    "id": "1159",
    "title": "新活死人之夜",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1159.html"
  },
  {
    "id": "1160",
    "title": "燕山君",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1160.html"
  },
  {
    "id": "1161",
    "title": "自杀理论",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1161.html"
  },
  {
    "id": "1162",
    "title": "中华儿女",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1162.html"
  },
  {
    "id": "1163",
    "title": "爱德华·蒙克（电影）",
    "year": "2024",
    "region": "挪威 / 瑞典",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1163.html"
  },
  {
    "id": "1164",
    "title": "你在笑",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1164.html"
  },
  {
    "id": "1165",
    "title": "加油！同期酱",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1165.html"
  },
  {
    "id": "1166",
    "title": "草图",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1166.html"
  },
  {
    "id": "1167",
    "title": "被遗忘的天使",
    "year": "2009",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1167.html"
  },
  {
    "id": "1168",
    "title": "空姐没有昨天",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1168.html"
  },
  {
    "id": "1169",
    "title": "小兵传奇",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1169.html"
  },
  {
    "id": "1170",
    "title": "神父教我的事",
    "year": "2024",
    "region": "波兰",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1170.html"
  },
  {
    "id": "1171",
    "title": "神之水滴",
    "year": "2025",
    "region": "法国 / 日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1171.html"
  },
  {
    "id": "1172",
    "title": "名校风暴第七季",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1172.html"
  },
  {
    "id": "1173",
    "title": "动物",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1173.html"
  },
  {
    "id": "1174",
    "title": "逆行者",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1174.html"
  },
  {
    "id": "1175",
    "title": "七个变态",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1175.html"
  },
  {
    "id": "1176",
    "title": "学校风云1982",
    "year": "1982",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1176.html"
  },
  {
    "id": "1177",
    "title": "龙飞相公",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1177.html"
  },
  {
    "id": "1178",
    "title": "怪奇大法师",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1178.html"
  },
  {
    "id": "1179",
    "title": "密西西比风情画",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1179.html"
  },
  {
    "id": "1180",
    "title": "老兄们",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1180.html"
  },
  {
    "id": "1181",
    "title": "光脚的基丰",
    "year": "2006",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1181.html"
  },
  {
    "id": "1182",
    "title": "被掠夺的画作",
    "year": "2022",
    "region": "德国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1182.html"
  },
  {
    "id": "1183",
    "title": "皇帝的新装",
    "year": "2024",
    "region": "美国 / 英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1183.html"
  },
  {
    "id": "1184",
    "title": "塞纳",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1184.html"
  },
  {
    "id": "1185",
    "title": "冷眼人",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1185.html"
  },
  {
    "id": "1186",
    "title": "父亲只有一个 4",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1186.html"
  },
  {
    "id": "1187",
    "title": "万事美好",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-1187.html"
  },
  {
    "id": "1188",
    "title": "暴力驱逐",
    "year": "2025",
    "region": "法国，比利时",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1188.html"
  },
  {
    "id": "1189",
    "title": "我走我路",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1189.html"
  },
  {
    "id": "1190",
    "title": "战·鼓",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1190.html"
  },
  {
    "id": "1191",
    "title": "迷失在黑暗之中",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1191.html"
  },
  {
    "id": "1192",
    "title": "安寿与厨子王丸",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "category": "高分片库",
    "url": "movie/movie-1192.html"
  },
  {
    "id": "1193",
    "title": "春风不化雨",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1193.html"
  },
  {
    "id": "1194",
    "title": "老瑞和哈迪之西部历险",
    "year": "1936",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1194.html"
  },
  {
    "id": "1195",
    "title": "红色警戒999",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1195.html"
  },
  {
    "id": "1196",
    "title": "窒命写真",
    "year": "2022",
    "region": "香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1196.html"
  },
  {
    "id": "1197",
    "title": "美人鱼第一季",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1197.html"
  },
  {
    "id": "1198",
    "title": "芳寸之地",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1198.html"
  },
  {
    "id": "1199",
    "title": "寄生兽",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1199.html"
  },
  {
    "id": "1200",
    "title": "炎之蜃气楼：水际的反叛者",
    "year": "2004",
    "region": "日本",
    "type": "OVA",
    "category": "日韩风情",
    "url": "movie/movie-1200.html"
  },
  {
    "id": "1201",
    "title": "寒夜星暖",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1201.html"
  },
  {
    "id": "1202",
    "title": "战略室",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1202.html"
  },
  {
    "id": "1203",
    "title": "过山车粤语",
    "year": "1977",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1203.html"
  },
  {
    "id": "1204",
    "title": "巅峰时代",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1204.html"
  },
  {
    "id": "1205",
    "title": "高压摇滚",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1205.html"
  },
  {
    "id": "1206",
    "title": "骗中传奇粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1206.html"
  },
  {
    "id": "1207",
    "title": "不可饶恕2021",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1207.html"
  },
  {
    "id": "1208",
    "title": "世界第一初恋第一季",
    "year": "2011",
    "region": "日本",
    "type": "动画",
    "category": "动作犯罪",
    "url": "movie/movie-1208.html"
  },
  {
    "id": "1209",
    "title": "独臂神尼",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1209.html"
  },
  {
    "id": "1210",
    "title": "寂寞的中尉",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1210.html"
  },
  {
    "id": "1211",
    "title": "薇若妮卡想不开",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1211.html"
  },
  {
    "id": "1212",
    "title": "潜艇",
    "year": "2022",
    "region": "德国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1212.html"
  },
  {
    "id": "1213",
    "title": "心字已成灰",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1213.html"
  },
  {
    "id": "1214",
    "title": "圣诞老人失忆了",
    "year": "2024",
    "region": "芬兰 / 美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1214.html"
  },
  {
    "id": "1215",
    "title": "变形金刚之汽车人战记",
    "year": "1999",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1215.html"
  },
  {
    "id": "1216",
    "title": "护士贝蒂",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1216.html"
  },
  {
    "id": "1217",
    "title": "昆仑七剑斗五龙粤语",
    "year": "1971",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1217.html"
  },
  {
    "id": "1218",
    "title": "小资女孩向前冲",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1218.html"
  },
  {
    "id": "1219",
    "title": "天龙战警",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1219.html"
  },
  {
    "id": "1220",
    "title": "末世遗言",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1220.html"
  },
  {
    "id": "1221",
    "title": "霹雳神州",
    "year": "2008",
    "region": "中国台湾",
    "type": "TV剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1221.html"
  },
  {
    "id": "1222",
    "title": "座头市凶状旅",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1222.html"
  },
  {
    "id": "1223",
    "title": "营地藏身处",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1223.html"
  },
  {
    "id": "1224",
    "title": "惊恐超能力",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1224.html"
  },
  {
    "id": "1225",
    "title": "毬谣魔影",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1225.html"
  },
  {
    "id": "1226",
    "title": "顶尖秀",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "华语热播",
    "url": "movie/movie-1226.html"
  },
  {
    "id": "1227",
    "title": "杀手请睁眼",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1227.html"
  },
  {
    "id": "1228",
    "title": "克洛诺斯",
    "year": "1993",
    "region": "西班牙",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1228.html"
  },
  {
    "id": "1229",
    "title": "春心假期",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1229.html"
  },
  {
    "id": "1230",
    "title": "愚人节",
    "year": "2020",
    "region": "西班牙",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1230.html"
  },
  {
    "id": "1231",
    "title": "沼泽地里的秘密",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1231.html"
  },
  {
    "id": "1232",
    "title": "逃亡记",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1232.html"
  },
  {
    "id": "1233",
    "title": "失落的守则",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1233.html"
  },
  {
    "id": "1234",
    "title": "黑夜幽灵",
    "year": "1996",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1234.html"
  },
  {
    "id": "1235",
    "title": "神探沙夫特",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1235.html"
  },
  {
    "id": "1236",
    "title": "恋爱要在世界征服后",
    "year": "2022",
    "region": "日本",
    "type": "动画",
    "category": "悬疑剧情",
    "url": "movie/movie-1236.html"
  },
  {
    "id": "1237",
    "title": "骑士梦",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1237.html"
  },
  {
    "id": "1238",
    "title": "杨贵妃",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1238.html"
  },
  {
    "id": "1239",
    "title": "爱情白皮书1993",
    "year": "1993",
    "region": "香港",
    "type": "爱情悬疑片",
    "category": "日韩风情",
    "url": "movie/movie-1239.html"
  },
  {
    "id": "1240",
    "title": "飞渡魔鬼海",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1240.html"
  },
  {
    "id": "1241",
    "title": "恋爱星求人粤语",
    "year": "2022",
    "region": "香港",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1241.html"
  },
  {
    "id": "1242",
    "title": "有权保持沉默",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1242.html"
  },
  {
    "id": "1243",
    "title": "恶之华",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1243.html"
  },
  {
    "id": "1244",
    "title": "恐惧大街2：1978",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1244.html"
  },
  {
    "id": "1245",
    "title": "爱别离苦",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1245.html"
  },
  {
    "id": "1246",
    "title": "工会成员",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1246.html"
  },
  {
    "id": "1247",
    "title": "爱人",
    "year": "2028",
    "region": "法国 / 比利时",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1247.html"
  },
  {
    "id": "1248",
    "title": "笑傲江湖2000",
    "year": "2000",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1248.html"
  },
  {
    "id": "1249",
    "title": "出租大叔",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1249.html"
  },
  {
    "id": "1250",
    "title": "魂断仲夏夜",
    "year": "2015",
    "region": "日本",
    "type": "爱情奇幻电影",
    "category": "日韩风情",
    "url": "movie/movie-1250.html"
  },
  {
    "id": "1251",
    "title": "小可爱娜斯佳第九季",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1251.html"
  },
  {
    "id": "1252",
    "title": "错恨",
    "year": "2011",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1252.html"
  },
  {
    "id": "1253",
    "title": "上帝是更大的猫王",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1253.html"
  },
  {
    "id": "1254",
    "title": "窈窕淑女1998",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1254.html"
  },
  {
    "id": "1255",
    "title": "倾城之恋",
    "year": "2023",
    "region": "中国内地",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1255.html"
  },
  {
    "id": "1256",
    "title": "我是卢武铉",
    "year": "2017",
    "region": "韩国",
    "type": "纪录片",
    "category": "华语热播",
    "url": "movie/movie-1256.html"
  },
  {
    "id": "1257",
    "title": "熊熊勇闯异世界第二季",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1257.html"
  },
  {
    "id": "1258",
    "title": "炮灰攻略",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1258.html"
  },
  {
    "id": "1259",
    "title": "管乐队",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1259.html"
  },
  {
    "id": "1260",
    "title": "闺蜜的战争",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1260.html"
  },
  {
    "id": "1261",
    "title": "民谣搜集者",
    "year": "2024",
    "region": "爱尔兰",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1261.html"
  },
  {
    "id": "1262",
    "title": "理发店",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1262.html"
  },
  {
    "id": "1263",
    "title": "紫罗兰永恒花园",
    "year": "2018",
    "region": "日本",
    "type": "TV Series",
    "category": "亚洲精选",
    "url": "movie/movie-1263.html"
  },
  {
    "id": "1264",
    "title": "老公啊，你能去死吗",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1264.html"
  },
  {
    "id": "1265",
    "title": "刺猬与城市",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1265.html"
  },
  {
    "id": "1266",
    "title": "从姑获鸟开始之龙城风云",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "经典年代",
    "url": "movie/movie-1266.html"
  },
  {
    "id": "1267",
    "title": "第十九个妻子",
    "year": "2022",
    "region": "美国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1267.html"
  },
  {
    "id": "1268",
    "title": "何处能容我",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1268.html"
  },
  {
    "id": "1269",
    "title": "绝望主夫",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1269.html"
  },
  {
    "id": "1270",
    "title": "中华大丈夫粤语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1270.html"
  },
  {
    "id": "1271",
    "title": "没问题男人",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1271.html"
  },
  {
    "id": "1272",
    "title": "魔法精灵",
    "year": "2023",
    "region": "芬兰",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1272.html"
  },
  {
    "id": "1273",
    "title": "城里的房间",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1273.html"
  },
  {
    "id": "1274",
    "title": "重返17岁",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1274.html"
  },
  {
    "id": "1275",
    "title": "一个人的战争",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1275.html"
  },
  {
    "id": "1276",
    "title": "运动学概论",
    "year": "2021",
    "region": "韩国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1276.html"
  },
  {
    "id": "1277",
    "title": "统营的一天",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1277.html"
  },
  {
    "id": "1278",
    "title": "沈马特开心",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1278.html"
  },
  {
    "id": "1279",
    "title": "致命邻居",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1279.html"
  },
  {
    "id": "1280",
    "title": "女校男生第一季",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1280.html"
  },
  {
    "id": "1281",
    "title": "双琴记",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1281.html"
  },
  {
    "id": "1282",
    "title": "一号档案守护者",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1282.html"
  },
  {
    "id": "1283",
    "title": "巅峰拍档第十季",
    "year": "2024",
    "region": "英国",
    "type": "综艺",
    "category": "经典年代",
    "url": "movie/movie-1283.html"
  },
  {
    "id": "1284",
    "title": "施恩得美",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1284.html"
  },
  {
    "id": "1285",
    "title": "2025重阳奇妙游",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺/晚会",
    "category": "经典年代",
    "url": "movie/movie-1285.html"
  },
  {
    "id": "1286",
    "title": "直率症",
    "year": "2024",
    "region": "中国大陆",
    "type": "都市悬疑电影",
    "category": "日韩风情",
    "url": "movie/movie-1286.html"
  },
  {
    "id": "1287",
    "title": "当代艺术",
    "year": "2025",
    "region": "法国 / 德国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1287.html"
  },
  {
    "id": "1288",
    "title": "喜怒哀乐",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1288.html"
  },
  {
    "id": "1289",
    "title": "人皮客栈",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1289.html"
  },
  {
    "id": "1290",
    "title": "千年情人",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1290.html"
  },
  {
    "id": "1291",
    "title": "加油吧！乡亲们",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1291.html"
  },
  {
    "id": "1292",
    "title": "超神",
    "year": "2026",
    "region": "美国",
    "type": "动画剧集",
    "category": "高分片库",
    "url": "movie/movie-1292.html"
  },
  {
    "id": "1293",
    "title": "乌鸦谷",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1293.html"
  },
  {
    "id": "1294",
    "title": "炸药屋",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1294.html"
  },
  {
    "id": "1295",
    "title": "黑之栖",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1295.html"
  },
  {
    "id": "1296",
    "title": "西瓜树",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1296.html"
  },
  {
    "id": "1297",
    "title": "28天",
    "year": "2000",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1297.html"
  },
  {
    "id": "1298",
    "title": "亚迪",
    "year": "2022",
    "region": "哈萨克斯坦",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1298.html"
  },
  {
    "id": "1299",
    "title": "思悼",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1299.html"
  },
  {
    "id": "1300",
    "title": "神鹰闯天关",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1300.html"
  },
  {
    "id": "1301",
    "title": "恶魔的艺术2",
    "year": "2005",
    "region": "泰国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1301.html"
  },
  {
    "id": "1302",
    "title": "干花",
    "year": "1964",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1302.html"
  },
  {
    "id": "1303",
    "title": "迷途的羔羊",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1303.html"
  },
  {
    "id": "1304",
    "title": "机动部队—伙伴",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1304.html"
  },
  {
    "id": "1305",
    "title": "恐怖星系",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1305.html"
  },
  {
    "id": "1306",
    "title": "圣经：创世纪",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1306.html"
  },
  {
    "id": "1307",
    "title": "宅男",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1307.html"
  },
  {
    "id": "1308",
    "title": "霹雳火秦明",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1308.html"
  },
  {
    "id": "1309",
    "title": "我们梦中的祥和",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1309.html"
  },
  {
    "id": "1310",
    "title": "伊莎朵拉的眼泪",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1310.html"
  },
  {
    "id": "1311",
    "title": "澳洲大逃亡",
    "year": "2022",
    "region": "澳大利亚",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1311.html"
  },
  {
    "id": "1312",
    "title": "时光流逝",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1312.html"
  },
  {
    "id": "1313",
    "title": "挚爱男行",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1313.html"
  },
  {
    "id": "1314",
    "title": "恐怖列车1973",
    "year": "1973",
    "region": "英国 / 意大利",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1314.html"
  },
  {
    "id": "1315",
    "title": "纵他入局",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1315.html"
  },
  {
    "id": "1316",
    "title": "人性记录",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1316.html"
  },
  {
    "id": "1317",
    "title": "魔鬼之血",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1317.html"
  },
  {
    "id": "1318",
    "title": "天使的小生意气",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1318.html"
  },
  {
    "id": "1319",
    "title": "看得见看不见",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1319.html"
  },
  {
    "id": "1320",
    "title": "修女哪有那么色",
    "year": "2024",
    "region": "意大利 / 法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1320.html"
  },
  {
    "id": "1321",
    "title": "超级玛利欧兄弟电影版",
    "year": "2023",
    "region": "美国 / 日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1321.html"
  },
  {
    "id": "1322",
    "title": "匿名情绪",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画青春",
    "url": "movie/movie-1322.html"
  },
  {
    "id": "1323",
    "title": "金环蚀国语",
    "year": "1975",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1323.html"
  },
  {
    "id": "1324",
    "title": "情深几许",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1324.html"
  },
  {
    "id": "1325",
    "title": "杀戮炼",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1325.html"
  },
  {
    "id": "1326",
    "title": "北非行路遥",
    "year": "1966",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1326.html"
  },
  {
    "id": "1327",
    "title": "甘宝",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1327.html"
  },
  {
    "id": "1328",
    "title": "黑盒子",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1328.html"
  },
  {
    "id": "1329",
    "title": "神隐·少年·狼",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1329.html"
  },
  {
    "id": "1330",
    "title": "汤马思·卡兹的九生之命",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1330.html"
  },
  {
    "id": "1331",
    "title": "魔鬼克星 未来世",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1331.html"
  },
  {
    "id": "1332",
    "title": "降妖罗汉",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1332.html"
  },
  {
    "id": "1333",
    "title": "神秘博士：逃跑新娘",
    "year": "2024",
    "region": "英国",
    "type": "电视剧特辑",
    "category": "奇幻科幻",
    "url": "movie/movie-1333.html"
  },
  {
    "id": "1334",
    "title": "两傻大战化身博士",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1334.html"
  },
  {
    "id": "1335",
    "title": "画皮2011",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1335.html"
  },
  {
    "id": "1336",
    "title": "侵占",
    "year": "2019",
    "region": "法国 / 比利时",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1336.html"
  },
  {
    "id": "1337",
    "title": "战地鹃声",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1337.html"
  },
  {
    "id": "1338",
    "title": "金钻裁女",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1338.html"
  },
  {
    "id": "1339",
    "title": "女探长",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1339.html"
  },
  {
    "id": "1340",
    "title": "爱情猎杀者",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1340.html"
  },
  {
    "id": "1341",
    "title": "龙门驿站之新嫁衣",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1341.html"
  },
  {
    "id": "1342",
    "title": "周日般的爱情",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1342.html"
  },
  {
    "id": "1343",
    "title": "千军万马战古城",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1343.html"
  },
  {
    "id": "1344",
    "title": "动物狂想曲 第二季",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "经典年代",
    "url": "movie/movie-1344.html"
  },
  {
    "id": "1345",
    "title": "我所看到的都是你",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1345.html"
  },
  {
    "id": "1346",
    "title": "梅花红桃",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1346.html"
  },
  {
    "id": "1347",
    "title": "叛逆性百万亚瑟王第二季",
    "year": "2025",
    "region": "中国大陆",
    "type": "历史奇幻电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1347.html"
  },
  {
    "id": "1348",
    "title": "小城故事多",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1348.html"
  },
  {
    "id": "1349",
    "title": "古城谍影",
    "year": "2005",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1349.html"
  },
  {
    "id": "1350",
    "title": "一个不落",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1350.html"
  },
  {
    "id": "1351",
    "title": "新东方神娃",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "category": "经典年代",
    "url": "movie/movie-1351.html"
  },
  {
    "id": "1352",
    "title": "机器猛犬",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1352.html"
  },
  {
    "id": "1353",
    "title": "亚森·罗宾第三季",
    "year": "2023",
    "region": "法国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1353.html"
  },
  {
    "id": "1354",
    "title": "男孩与桥",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1354.html"
  },
  {
    "id": "1355",
    "title": "墨西哥村庄",
    "year": "2023",
    "region": "墨西哥",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1355.html"
  },
  {
    "id": "1356",
    "title": "全垒打",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1356.html"
  },
  {
    "id": "1357",
    "title": "海猿2",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1357.html"
  },
  {
    "id": "1358",
    "title": "机智的捕快日常",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1358.html"
  },
  {
    "id": "1359",
    "title": "天上掉下来的礼物",
    "year": "2006",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1359.html"
  },
  {
    "id": "1360",
    "title": "力歼三霸",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1360.html"
  },
  {
    "id": "1361",
    "title": "大长今",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1361.html"
  },
  {
    "id": "1362",
    "title": "霹雳雄鹰",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1362.html"
  },
  {
    "id": "1363",
    "title": "猎魔人：狼之噩梦",
    "year": "2024",
    "region": "波兰 / 美国",
    "type": "电影 / 动画",
    "category": "喜剧家庭",
    "url": "movie/movie-1363.html"
  },
  {
    "id": "1364",
    "title": "寒战2",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1364.html"
  },
  {
    "id": "1365",
    "title": "27件礼服的秘密",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1365.html"
  },
  {
    "id": "1366",
    "title": "忠仔",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1366.html"
  },
  {
    "id": "1367",
    "title": "完全猎魔攻略",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1367.html"
  },
  {
    "id": "1368",
    "title": "巅峰拍档第十八季",
    "year": "2012",
    "region": "英国",
    "type": "综艺/剧集",
    "category": "动画青春",
    "url": "movie/movie-1368.html"
  },
  {
    "id": "1369",
    "title": "悸忆拼图",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1369.html"
  },
  {
    "id": "1370",
    "title": "山茶花飘零",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1370.html"
  },
  {
    "id": "1371",
    "title": "邻里美好的一天",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1371.html"
  },
  {
    "id": "1372",
    "title": "艾迪（电影）",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1372.html"
  },
  {
    "id": "1373",
    "title": "远离西藏",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1373.html"
  },
  {
    "id": "1374",
    "title": "决鬪地平线",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1374.html"
  },
  {
    "id": "1375",
    "title": "迷夜惨遇",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1375.html"
  },
  {
    "id": "1376",
    "title": "地球突裂",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1376.html"
  },
  {
    "id": "1377",
    "title": "地球人坏坏",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1377.html"
  },
  {
    "id": "1378",
    "title": "史上最大作弊战争",
    "year": "2020",
    "region": "中国大陆",
    "type": "竞技喜剧电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1378.html"
  },
  {
    "id": "1379",
    "title": "捷足先登三十年",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1379.html"
  },
  {
    "id": "1380",
    "title": "日历女郎凶杀案",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1380.html"
  },
  {
    "id": "1381",
    "title": "果汁",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1381.html"
  },
  {
    "id": "1382",
    "title": "森林的终点是海",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1382.html"
  },
  {
    "id": "1383",
    "title": "黄金之法",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1383.html"
  },
  {
    "id": "1384",
    "title": "红松鼠",
    "year": "1993",
    "region": "西班牙",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1384.html"
  },
  {
    "id": "1385",
    "title": "师大公园地下社会",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1385.html"
  },
  {
    "id": "1386",
    "title": "摩斯探长第九季",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1386.html"
  },
  {
    "id": "1387",
    "title": "抽屉中的情书",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1387.html"
  },
  {
    "id": "1388",
    "title": "复仇女神 1987",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1388.html"
  },
  {
    "id": "1389",
    "title": "阴阳路柒撞到正",
    "year": "2004",
    "region": "香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1389.html"
  },
  {
    "id": "1390",
    "title": "顽皮豹与铲子",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "动画电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1390.html"
  },
  {
    "id": "1391",
    "title": "我的特工爷爷",
    "year": "2026",
    "region": "香港 / 中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1391.html"
  },
  {
    "id": "1392",
    "title": "入间同学入魔了",
    "year": "2025",
    "region": "日本",
    "type": "剧集 / 动画",
    "category": "经典年代",
    "url": "movie/movie-1392.html"
  },
  {
    "id": "1393",
    "title": "兔子共和国",
    "year": "2018",
    "region": "英国 / 爱尔兰",
    "type": "动画剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1393.html"
  },
  {
    "id": "1394",
    "title": "热血勇士",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1394.html"
  },
  {
    "id": "1395",
    "title": "将夜",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1395.html"
  },
  {
    "id": "1396",
    "title": "刑警博客",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1396.html"
  },
  {
    "id": "1397",
    "title": "血腥的星期天",
    "year": "2020",
    "region": "中国大陆",
    "type": "犯罪惊悚电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1397.html"
  },
  {
    "id": "1398",
    "title": "爱情储蓄罐",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1398.html"
  },
  {
    "id": "1399",
    "title": "哈里如何变成一棵树",
    "year": "2016",
    "region": "英国",
    "type": "奇幻剧情电影",
    "category": "日韩风情",
    "url": "movie/movie-1399.html"
  },
  {
    "id": "1400",
    "title": "艳骨",
    "year": "2017",
    "region": "中国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1400.html"
  },
  {
    "id": "1401",
    "title": "荒神",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1401.html"
  },
  {
    "id": "1402",
    "title": "回魂夜1995",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1402.html"
  },
  {
    "id": "1403",
    "title": "四十颗心",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1403.html"
  },
  {
    "id": "1404",
    "title": "细说从头",
    "year": "2017",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1404.html"
  },
  {
    "id": "1405",
    "title": "整垮前男友",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1405.html"
  },
  {
    "id": "1406",
    "title": "佩特拉",
    "year": "2024",
    "region": "意大利 / 法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1406.html"
  },
  {
    "id": "1407",
    "title": "徐悲鸿",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1407.html"
  },
  {
    "id": "1408",
    "title": "傲慢的波里斯先生",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1408.html"
  },
  {
    "id": "1409",
    "title": "豪斯医生第三季",
    "year": "2006",
    "region": "美国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1409.html"
  },
  {
    "id": "1410",
    "title": "拥抱故乡",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1410.html"
  },
  {
    "id": "1411",
    "title": "战龙在野",
    "year": "2002",
    "region": "香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1411.html"
  },
  {
    "id": "1412",
    "title": "埃弗斯小姐的男孩们",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1412.html"
  },
  {
    "id": "1413",
    "title": "陆上行舟",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1413.html"
  },
  {
    "id": "1414",
    "title": "模仿客",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1414.html"
  },
  {
    "id": "1415",
    "title": "噗妮露是可爱史莱姆第二季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1415.html"
  },
  {
    "id": "1416",
    "title": "孽欲杀人夜",
    "year": "1993",
    "region": "香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1416.html"
  },
  {
    "id": "1417",
    "title": "捕狼行动",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1417.html"
  },
  {
    "id": "1418",
    "title": "美少爷之恋",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1418.html"
  },
  {
    "id": "1419",
    "title": "大人物",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1419.html"
  },
  {
    "id": "1420",
    "title": "哥斯达·柏林世家",
    "year": "2026",
    "region": "德国 / 西班牙",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1420.html"
  },
  {
    "id": "1421",
    "title": "猜谜王",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "动画青春",
    "url": "movie/movie-1421.html"
  },
  {
    "id": "1422",
    "title": "恶霸末日",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1422.html"
  },
  {
    "id": "1423",
    "title": "异变",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1423.html"
  },
  {
    "id": "1424",
    "title": "地平线系列：绿色畜牧",
    "year": "2024",
    "region": "英国",
    "type": "纪录片",
    "category": "高分片库",
    "url": "movie/movie-1424.html"
  },
  {
    "id": "1425",
    "title": "蒙大拿天空",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1425.html"
  },
  {
    "id": "1426",
    "title": "孩子们",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1426.html"
  },
  {
    "id": "1427",
    "title": "情根固爱",
    "year": "2025",
    "region": "印度",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1427.html"
  },
  {
    "id": "1428",
    "title": "水耀日",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1428.html"
  },
  {
    "id": "1429",
    "title": "施佩萨尔特的客栈",
    "year": "2020",
    "region": "德国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1429.html"
  },
  {
    "id": "1430",
    "title": "进入坟场2",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1430.html"
  },
  {
    "id": "1431",
    "title": "瑞盖特村之谜",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1431.html"
  },
  {
    "id": "1432",
    "title": "开罗的一天",
    "year": "2020",
    "region": "埃及 / 法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1432.html"
  },
  {
    "id": "1433",
    "title": "跳出火花",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1433.html"
  },
  {
    "id": "1434",
    "title": "今天可能有点辣",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1434.html"
  },
  {
    "id": "1435",
    "title": "六弄咖啡馆",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1435.html"
  },
  {
    "id": "1436",
    "title": "大和舰战没记",
    "year": "1977",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1436.html"
  },
  {
    "id": "1437",
    "title": "我不是贼",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1437.html"
  },
  {
    "id": "1438",
    "title": "灵魂出卖",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1438.html"
  },
  {
    "id": "1439",
    "title": "谋杀，她写道：凯尔特之谜",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1439.html"
  },
  {
    "id": "1440",
    "title": "卡到阴",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1440.html"
  },
  {
    "id": "1441",
    "title": "激情时代",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1441.html"
  },
  {
    "id": "1442",
    "title": "彼得和温迪",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1442.html"
  },
  {
    "id": "1443",
    "title": "色情之后",
    "year": "2016",
    "region": "日本",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1443.html"
  },
  {
    "id": "1444",
    "title": "血溅13号警署",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1444.html"
  },
  {
    "id": "1445",
    "title": "巴黎危机",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1445.html"
  },
  {
    "id": "1446",
    "title": "红色追击令",
    "year": "2020",
    "region": "中国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1446.html"
  },
  {
    "id": "1447",
    "title": "巴黎小情歌",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1447.html"
  },
  {
    "id": "1448",
    "title": "诡打墙",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1448.html"
  },
  {
    "id": "1449",
    "title": "老木逢春",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1449.html"
  },
  {
    "id": "1450",
    "title": "天空与海洋",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1450.html"
  },
  {
    "id": "1451",
    "title": "十字剑第二季",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1451.html"
  },
  {
    "id": "1452",
    "title": "我在温州等你",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1452.html"
  },
  {
    "id": "1453",
    "title": "伯特·克赖舍：今夜来狂欢",
    "year": "2025",
    "region": "美国",
    "type": "Stand-up Comedy",
    "category": "经典年代",
    "url": "movie/movie-1453.html"
  },
  {
    "id": "1454",
    "title": "大雪冬至",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1454.html"
  },
  {
    "id": "1455",
    "title": "她让我心动",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1455.html"
  },
  {
    "id": "1456",
    "title": "谍网妖姬",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1456.html"
  },
  {
    "id": "1457",
    "title": "原来你还在这里",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1457.html"
  },
  {
    "id": "1458",
    "title": "正牌香蕉俱乐部",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1458.html"
  },
  {
    "id": "1459",
    "title": "小生怕羞",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1459.html"
  },
  {
    "id": "1460",
    "title": "对不起，萨朗嘿哟",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1460.html"
  },
  {
    "id": "1461",
    "title": "性在有情粤语",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1461.html"
  },
  {
    "id": "1462",
    "title": "一屋两火",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1462.html"
  },
  {
    "id": "1463",
    "title": "都是陌生人",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1463.html"
  },
  {
    "id": "1464",
    "title": "精灵床",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1464.html"
  },
  {
    "id": "1465",
    "title": "一一",
    "year": "2000",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1465.html"
  },
  {
    "id": "1466",
    "title": "友爱久久",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1466.html"
  },
  {
    "id": "1467",
    "title": "鬼龙院花子的一生",
    "year": "1982",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1467.html"
  },
  {
    "id": "1468",
    "title": "曼哈顿的三个房间",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1468.html"
  },
  {
    "id": "1469",
    "title": "资金源强夺",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1469.html"
  },
  {
    "id": "1470",
    "title": "老师你好",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1470.html"
  },
  {
    "id": "1471",
    "title": "瘦子的影子",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1471.html"
  },
  {
    "id": "1472",
    "title": "不思议游戏",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "经典年代",
    "url": "movie/movie-1472.html"
  },
  {
    "id": "1473",
    "title": "暴雨将至",
    "year": "2024",
    "region": "北马其顿",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1473.html"
  },
  {
    "id": "1474",
    "title": "拜见岳父大人",
    "year": "2016",
    "region": "中国",
    "type": "喜剧电影",
    "category": "动作犯罪",
    "url": "movie/movie-1474.html"
  },
  {
    "id": "1475",
    "title": "动态漫画·第一赘婿第一季",
    "year": "2026",
    "region": "中国大陆",
    "type": "动漫",
    "category": "亚洲精选",
    "url": "movie/movie-1475.html"
  },
  {
    "id": "1476",
    "title": "交响少年梦第一季",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1476.html"
  },
  {
    "id": "1477",
    "title": "囧探查过界粤语",
    "year": "2011",
    "region": "中国香港",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1477.html"
  },
  {
    "id": "1478",
    "title": "不速之客",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1478.html"
  },
  {
    "id": "1479",
    "title": "卖花姑娘",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1479.html"
  },
  {
    "id": "1480",
    "title": "鲁邦三世 次元大介的墓标",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1480.html"
  },
  {
    "id": "1481",
    "title": "爱我一下·夏",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1481.html"
  },
  {
    "id": "1482",
    "title": "他们选择了自由",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1482.html"
  },
  {
    "id": "1483",
    "title": "代理市长",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1483.html"
  },
  {
    "id": "1484",
    "title": "嫁衣",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1484.html"
  },
  {
    "id": "1485",
    "title": "通勤营救",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1485.html"
  },
  {
    "id": "1486",
    "title": "乡村爱情2",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1486.html"
  },
  {
    "id": "1487",
    "title": "少年之名铁勺记事簿",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1487.html"
  },
  {
    "id": "1488",
    "title": "龙凤配",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1488.html"
  },
  {
    "id": "1489",
    "title": "死亡的一天",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1489.html"
  },
  {
    "id": "1490",
    "title": "上海1920",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1490.html"
  },
  {
    "id": "1491",
    "title": "万物生灵第一季",
    "year": "2020",
    "region": "英国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1491.html"
  },
  {
    "id": "1492",
    "title": "德累斯顿大轰炸",
    "year": "2006",
    "region": "德国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1492.html"
  },
  {
    "id": "1493",
    "title": "小小米高勇闯梦之国",
    "year": "2023",
    "region": "法国",
    "type": "动画电影",
    "category": "经典年代",
    "url": "movie/movie-1493.html"
  },
  {
    "id": "1494",
    "title": "阵阵云雨香",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1494.html"
  },
  {
    "id": "1495",
    "title": "甜死人大革命",
    "year": "2022",
    "region": "法国 / 比利时",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1495.html"
  },
  {
    "id": "1496",
    "title": "她们的蓝衫时光",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1496.html"
  },
  {
    "id": "1497",
    "title": "全员恶玉",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "category": "经典年代",
    "url": "movie/movie-1497.html"
  },
  {
    "id": "1498",
    "title": "两情世界",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1498.html"
  },
  {
    "id": "1499",
    "title": "美丽俏佳人",
    "year": "2016",
    "region": "台湾",
    "type": "喜剧剧情电影",
    "category": "经典年代",
    "url": "movie/movie-1499.html"
  },
  {
    "id": "1500",
    "title": "笨贼乐盗家",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1500.html"
  },
  {
    "id": "1501",
    "title": "救救我今晚",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1501.html"
  },
  {
    "id": "1502",
    "title": "暗黑都市",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1502.html"
  },
  {
    "id": "1503",
    "title": "一只鞋",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1503.html"
  },
  {
    "id": "1504",
    "title": "反串仍是爱",
    "year": "2021",
    "region": "泰国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1504.html"
  },
  {
    "id": "1505",
    "title": "显影",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1505.html"
  },
  {
    "id": "1506",
    "title": "伏罗希洛夫射手",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1506.html"
  },
  {
    "id": "1507",
    "title": "飞天神童",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1507.html"
  },
  {
    "id": "1508",
    "title": "黑色止血钳2",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1508.html"
  },
  {
    "id": "1509",
    "title": "亡命母侵",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1509.html"
  },
  {
    "id": "1510",
    "title": "谜一样的双眼",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1510.html"
  },
  {
    "id": "1511",
    "title": "后宫",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1511.html"
  },
  {
    "id": "1512",
    "title": "汤姆猫与杰利鼠：牛仔崛起",
    "year": "2025",
    "region": "美国",
    "type": "电影 / 动画",
    "category": "喜剧家庭",
    "url": "movie/movie-1512.html"
  },
  {
    "id": "1513",
    "title": "杀手猴第二季",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "category": "高分片库",
    "url": "movie/movie-1513.html"
  },
  {
    "id": "1514",
    "title": "情泪心声",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1514.html"
  },
  {
    "id": "1515",
    "title": "爆兽猎人",
    "year": "2017",
    "region": "中国大陆",
    "type": "动画片",
    "category": "亚洲精选",
    "url": "movie/movie-1515.html"
  },
  {
    "id": "1516",
    "title": "雷射战队",
    "year": "1998",
    "region": "日本",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1516.html"
  },
  {
    "id": "1517",
    "title": "电锯惊魂5",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1517.html"
  },
  {
    "id": "1518",
    "title": "小字辈",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1518.html"
  },
  {
    "id": "1519",
    "title": "月亮公园",
    "year": "2005",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1519.html"
  },
  {
    "id": "1520",
    "title": "修业魔女璐璐萌",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1520.html"
  },
  {
    "id": "1521",
    "title": "你好卡特",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1521.html"
  },
  {
    "id": "1522",
    "title": "曼哈顿恋习曲",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1522.html"
  },
  {
    "id": "1523",
    "title": "反斗仔得美",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1523.html"
  },
  {
    "id": "1524",
    "title": "鬼灭之刃 鼓屋敷篇",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1524.html"
  },
  {
    "id": "1525",
    "title": "长慕未央",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1525.html"
  },
  {
    "id": "1526",
    "title": "众里寻他遇上她",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1526.html"
  },
  {
    "id": "1527",
    "title": "我家的律师很麻烦",
    "year": "2026",
    "region": "中国香港",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1527.html"
  },
  {
    "id": "1528",
    "title": "梅兰菊竹",
    "year": "2025",
    "region": "中国香港/中国大陆",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1528.html"
  },
  {
    "id": "1529",
    "title": "两面神的头",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1529.html"
  },
  {
    "id": "1530",
    "title": "风尘艳侣",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1530.html"
  },
  {
    "id": "1531",
    "title": "园丁",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1531.html"
  },
  {
    "id": "1532",
    "title": "春宵千金",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1532.html"
  },
  {
    "id": "1533",
    "title": "马里",
    "year": "2017",
    "region": "塞内加尔 / 法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1533.html"
  },
  {
    "id": "1534",
    "title": "天魔历险",
    "year": "2019",
    "region": "英国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1534.html"
  },
  {
    "id": "1535",
    "title": "终极仇杀",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1535.html"
  },
  {
    "id": "1536",
    "title": "黑礁第二季",
    "year": "2008",
    "region": "日本",
    "type": "动画剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1536.html"
  },
  {
    "id": "1537",
    "title": "越活越明白",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1537.html"
  },
  {
    "id": "1538",
    "title": "证词",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1538.html"
  },
  {
    "id": "1539",
    "title": "再见，坏蛋",
    "year": "2026",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1539.html"
  },
  {
    "id": "1540",
    "title": "老虎行大运",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1540.html"
  },
  {
    "id": "1541",
    "title": "姊姊2021",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1541.html"
  },
  {
    "id": "1542",
    "title": "助产士",
    "year": "2022",
    "region": "芬兰",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1542.html"
  },
  {
    "id": "1543",
    "title": "南风",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1543.html"
  },
  {
    "id": "1544",
    "title": "降妖伏魔之定海神针",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1544.html"
  },
  {
    "id": "1545",
    "title": "镰仓殿的13人",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1545.html"
  },
  {
    "id": "1546",
    "title": "痴迷女杀手",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1546.html"
  },
  {
    "id": "1547",
    "title": "穿梭三千年",
    "year": "2015",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1547.html"
  },
  {
    "id": "1548",
    "title": "温良之心",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1548.html"
  },
  {
    "id": "1549",
    "title": "男人使用说明书",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1549.html"
  },
  {
    "id": "1550",
    "title": "毛子佩闯宫",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1550.html"
  },
  {
    "id": "1551",
    "title": "漂亮的公主",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1551.html"
  },
  {
    "id": "1552",
    "title": "手机癌患者",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1552.html"
  },
  {
    "id": "1553",
    "title": "戈戈舞的故事",
    "year": "2018",
    "region": "阿根廷",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1553.html"
  },
  {
    "id": "1554",
    "title": "爱上哥们",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1554.html"
  },
  {
    "id": "1555",
    "title": "八仙传之吕仙惩贪记",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1555.html"
  },
  {
    "id": "1556",
    "title": "化身博士之子",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1556.html"
  },
  {
    "id": "1557",
    "title": "美国派2",
    "year": "2001",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1557.html"
  },
  {
    "id": "1558",
    "title": "飞行家",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1558.html"
  },
  {
    "id": "1559",
    "title": "超凡跨次元",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1559.html"
  },
  {
    "id": "1560",
    "title": "龟兔大作战",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1560.html"
  },
  {
    "id": "1561",
    "title": "进球吧！少年",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1561.html"
  },
  {
    "id": "1562",
    "title": "木马屠城记",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1562.html"
  },
  {
    "id": "1563",
    "title": "南瓜恶灵2：血翼",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1563.html"
  },
  {
    "id": "1564",
    "title": "阴阳路十六之回到武侠时代",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1564.html"
  },
  {
    "id": "1565",
    "title": "轻微盗窃案",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1565.html"
  },
  {
    "id": "1566",
    "title": "食破天惊",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1566.html"
  },
  {
    "id": "1567",
    "title": "面包超人：生命之星朵莉",
    "year": "2023",
    "region": "日本",
    "type": "动画电影",
    "category": "动作犯罪",
    "url": "movie/movie-1567.html"
  },
  {
    "id": "1568",
    "title": "女神咖啡厅第二季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1568.html"
  },
  {
    "id": "1569",
    "title": "淘气阿丹",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1569.html"
  },
  {
    "id": "1570",
    "title": "碧血蓝勋",
    "year": "1966",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1570.html"
  },
  {
    "id": "1571",
    "title": "决战天门",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1571.html"
  },
  {
    "id": "1572",
    "title": "伊丽莎白2：黄金时代",
    "year": "2007",
    "region": "英国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1572.html"
  },
  {
    "id": "1573",
    "title": "换屋惊魂",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1573.html"
  },
  {
    "id": "1574",
    "title": "不安之邻",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1574.html"
  },
  {
    "id": "1575",
    "title": "至尊宝",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1575.html"
  },
  {
    "id": "1576",
    "title": "切罗基大街的房子",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1576.html"
  },
  {
    "id": "1577",
    "title": "黑暗女巫",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1577.html"
  },
  {
    "id": "1578",
    "title": "有顶天家族第二季",
    "year": "2017",
    "region": "日本",
    "type": "动画剧集",
    "category": "经典年代",
    "url": "movie/movie-1578.html"
  },
  {
    "id": "1579",
    "title": "金三角之无法伤悲",
    "year": "2027",
    "region": "中国 / 泰国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1579.html"
  },
  {
    "id": "1580",
    "title": "小樽情书",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1580.html"
  },
  {
    "id": "1581",
    "title": "白色微笑",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1581.html"
  },
  {
    "id": "1582",
    "title": "东北喜事之山炮扶上墙",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1582.html"
  },
  {
    "id": "1583",
    "title": "誓约归隐",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1583.html"
  },
  {
    "id": "1584",
    "title": "标本制作人",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1584.html"
  },
  {
    "id": "1585",
    "title": "罪恶岛",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1585.html"
  },
  {
    "id": "1586",
    "title": "苏珊娜的故事",
    "year": "2028",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1586.html"
  },
  {
    "id": "1587",
    "title": "玛莎搭上三个男人",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1587.html"
  },
  {
    "id": "1588",
    "title": "冷血长官放开我",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1588.html"
  },
  {
    "id": "1589",
    "title": "奋力一搏",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1589.html"
  },
  {
    "id": "1590",
    "title": "魔恋",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1590.html"
  },
  {
    "id": "1591",
    "title": "金牌警校军第三集",
    "year": "1986",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1591.html"
  },
  {
    "id": "1592",
    "title": "珊迪大电影：拯救比奇堡",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "category": "高分片库",
    "url": "movie/movie-1592.html"
  },
  {
    "id": "1593",
    "title": "二嫫",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1593.html"
  },
  {
    "id": "1594",
    "title": "说的就是你3",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1594.html"
  },
  {
    "id": "1595",
    "title": "功夫黑带",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1595.html"
  },
  {
    "id": "1596",
    "title": "魔法科高校的劣等生第三季",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1596.html"
  },
  {
    "id": "1597",
    "title": "照明商店",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1597.html"
  },
  {
    "id": "1598",
    "title": "这个年纪还能当大侠吗",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1598.html"
  },
  {
    "id": "1599",
    "title": "超时空爱恋之幻境重生",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1599.html"
  },
  {
    "id": "1600",
    "title": "吃人大叔",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1600.html"
  },
  {
    "id": "1601",
    "title": "绝命救赎",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1601.html"
  },
  {
    "id": "1602",
    "title": "剧场版 破刃之剑",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1602.html"
  },
  {
    "id": "1603",
    "title": "女高校生死了以后",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1603.html"
  },
  {
    "id": "1604",
    "title": "敢爱敢斗",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1604.html"
  },
  {
    "id": "1605",
    "title": "山羊妈妈和她的三个孩子",
    "year": "2025",
    "region": "土耳其",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1605.html"
  },
  {
    "id": "1606",
    "title": "何以笙箫默",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1606.html"
  },
  {
    "id": "1607",
    "title": "夭寿富二代",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1607.html"
  },
  {
    "id": "1608",
    "title": "奇魔侠3",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1608.html"
  },
  {
    "id": "1609",
    "title": "南京1937",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1609.html"
  },
  {
    "id": "1610",
    "title": "街头拳霸",
    "year": "2008",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1610.html"
  },
  {
    "id": "1611",
    "title": "我想和你唱第二季",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "高分片库",
    "url": "movie/movie-1611.html"
  },
  {
    "id": "1612",
    "title": "即时引爆",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1612.html"
  },
  {
    "id": "1613",
    "title": "修辱",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1613.html"
  },
  {
    "id": "1614",
    "title": "夏普的挑战",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1614.html"
  },
  {
    "id": "1615",
    "title": "马语者",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1615.html"
  },
  {
    "id": "1616",
    "title": "地铁惊魂2016",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1616.html"
  },
  {
    "id": "1617",
    "title": "三角窗外是黑夜动画版",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1617.html"
  },
  {
    "id": "1618",
    "title": "妻子的反攻",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1618.html"
  },
  {
    "id": "1619",
    "title": "烈血的规条",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1619.html"
  },
  {
    "id": "1620",
    "title": "谣言的女人",
    "year": "2019",
    "region": "日本",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1620.html"
  },
  {
    "id": "1621",
    "title": "革命叛徒",
    "year": "2013",
    "region": "法国 / 阿尔及利亚",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1621.html"
  },
  {
    "id": "1622",
    "title": "恶魔少爷别吻我第二部",
    "year": "2017",
    "region": "中国大陆",
    "type": "网剧",
    "category": "动作犯罪",
    "url": "movie/movie-1622.html"
  },
  {
    "id": "1623",
    "title": "兔子谜题",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1623.html"
  },
  {
    "id": "1624",
    "title": "深林诡事",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1624.html"
  },
  {
    "id": "1625",
    "title": "摇滚骗",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1625.html"
  },
  {
    "id": "1626",
    "title": "魔法圣战",
    "year": "1989",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1626.html"
  },
  {
    "id": "1627",
    "title": "我们星球上的生命",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1627.html"
  },
  {
    "id": "1628",
    "title": "柔板",
    "year": "2020",
    "region": "法国 / 意大利",
    "type": "剧情电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1628.html"
  },
  {
    "id": "1629",
    "title": "更衣人偶坠入爱河第二季",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "category": "奇幻科幻",
    "url": "movie/movie-1629.html"
  },
  {
    "id": "1630",
    "title": "花牌杀人",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1630.html"
  },
  {
    "id": "1631",
    "title": "灵数23",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1631.html"
  },
  {
    "id": "1632",
    "title": "传染",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1632.html"
  },
  {
    "id": "1633",
    "title": "邪恶幼灵",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1633.html"
  },
  {
    "id": "1634",
    "title": "苏格兰女王：玛丽一世",
    "year": "2027",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1634.html"
  },
  {
    "id": "1635",
    "title": "我们曾是战士",
    "year": "2002",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1635.html"
  },
  {
    "id": "1636",
    "title": "七个机会",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1636.html"
  },
  {
    "id": "1637",
    "title": "一代骄马",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1637.html"
  },
  {
    "id": "1638",
    "title": "波基普西录像带",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1638.html"
  },
  {
    "id": "1639",
    "title": "当机立断",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1639.html"
  },
  {
    "id": "1640",
    "title": "迷局伏香",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1640.html"
  },
  {
    "id": "1641",
    "title": "杀不了的他与死不了的她",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1641.html"
  },
  {
    "id": "1642",
    "title": "楼层游戏",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1642.html"
  },
  {
    "id": "1643",
    "title": "欲海残花",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1643.html"
  },
  {
    "id": "1644",
    "title": "台湾版我可能不会爱你",
    "year": "2019",
    "region": "中国台湾",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1644.html"
  },
  {
    "id": "1645",
    "title": "满仓进城",
    "year": "2024",
    "region": "中国内地",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1645.html"
  },
  {
    "id": "1646",
    "title": "金色海岸",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1646.html"
  },
  {
    "id": "1647",
    "title": "树海村",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1647.html"
  },
  {
    "id": "1648",
    "title": "午夜博物馆",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1648.html"
  },
  {
    "id": "1649",
    "title": "志愿军：雄兵出击",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1649.html"
  },
  {
    "id": "1650",
    "title": "繁殖",
    "year": "2023",
    "region": "澳大利亚",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1650.html"
  },
  {
    "id": "1651",
    "title": "地球守护者",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1651.html"
  },
  {
    "id": "1652",
    "title": "远方有多远",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1652.html"
  },
  {
    "id": "1653",
    "title": "猪猪侠大电影·星际行动",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1653.html"
  },
  {
    "id": "1654",
    "title": "蓝月亮",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1654.html"
  },
  {
    "id": "1655",
    "title": "下流偷生族",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1655.html"
  },
  {
    "id": "1656",
    "title": "小小飞虎队2011",
    "year": "2011",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1656.html"
  },
  {
    "id": "1657",
    "title": "人魔",
    "year": "1981",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1657.html"
  },
  {
    "id": "1658",
    "title": "春色无边满花都",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1658.html"
  },
  {
    "id": "1659",
    "title": "地狱之渊",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1659.html"
  },
  {
    "id": "1660",
    "title": "银楼金粉粤语",
    "year": "2008",
    "region": "中国香港",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1660.html"
  },
  {
    "id": "1661",
    "title": "夏终年与顾平生",
    "year": "2018",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1661.html"
  },
  {
    "id": "1662",
    "title": "难以忽视的真相2",
    "year": "2025",
    "region": "全球",
    "type": "纪录片",
    "category": "日韩风情",
    "url": "movie/movie-1662.html"
  },
  {
    "id": "1663",
    "title": "大自然恐怖故事",
    "year": "2025",
    "region": "加拿大",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1663.html"
  },
  {
    "id": "1664",
    "title": "菜鸟老警第三季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1664.html"
  },
  {
    "id": "1665",
    "title": "木星的初恋",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1665.html"
  },
  {
    "id": "1666",
    "title": "浴火凤凰2015",
    "year": "2015",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1666.html"
  },
  {
    "id": "1667",
    "title": "为了与你相遇",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1667.html"
  },
  {
    "id": "1668",
    "title": "逃离改造营",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "动画青春",
    "url": "movie/movie-1668.html"
  },
  {
    "id": "1669",
    "title": "一个美国消防员的生活",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1669.html"
  },
  {
    "id": "1670",
    "title": "我主沉浮",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1670.html"
  },
  {
    "id": "1671",
    "title": "分手100次",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1671.html"
  },
  {
    "id": "1672",
    "title": "女人不易做国语",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1672.html"
  },
  {
    "id": "1673",
    "title": "我的哈士奇男友",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1673.html"
  },
  {
    "id": "1674",
    "title": "狼与狮子",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1674.html"
  },
  {
    "id": "1675",
    "title": "滑头鬼之孙第二季",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1675.html"
  },
  {
    "id": "1676",
    "title": "阿凡达：水之道",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1676.html"
  },
  {
    "id": "1677",
    "title": "老拍挡",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1677.html"
  },
  {
    "id": "1678",
    "title": "我老婆未满十八岁",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1678.html"
  },
  {
    "id": "1679",
    "title": "红杏初恋",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1679.html"
  },
  {
    "id": "1680",
    "title": "纯真变奏曲",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1680.html"
  },
  {
    "id": "1681",
    "title": "新天师斗僵尸2",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1681.html"
  },
  {
    "id": "1682",
    "title": "枭起青壤",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1682.html"
  },
  {
    "id": "1683",
    "title": "花鼠明星俱乐部2",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1683.html"
  },
  {
    "id": "1684",
    "title": "报告卡",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1684.html"
  },
  {
    "id": "1685",
    "title": "九个学生的短片",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1685.html"
  },
  {
    "id": "1686",
    "title": "怪盗山猫",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1686.html"
  },
  {
    "id": "1687",
    "title": "非关性爱",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1687.html"
  },
  {
    "id": "1688",
    "title": "龙虎斗",
    "year": "2001",
    "region": "香港",
    "type": "功夫动作片",
    "category": "喜剧家庭",
    "url": "movie/movie-1688.html"
  },
  {
    "id": "1689",
    "title": "碧比和缇娜",
    "year": "2022",
    "region": "加拿大",
    "type": "动画电影",
    "category": "华语热播",
    "url": "movie/movie-1689.html"
  },
  {
    "id": "1690",
    "title": "旋风女队",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1690.html"
  },
  {
    "id": "1691",
    "title": "第七码",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1691.html"
  },
  {
    "id": "1692",
    "title": "法官与杀人犯",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1692.html"
  },
  {
    "id": "1693",
    "title": "卖淫奇女子",
    "year": "1975",
    "region": "法国 / 意大利",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1693.html"
  },
  {
    "id": "1694",
    "title": "地海传说",
    "year": "2006",
    "region": "日本",
    "type": "动画电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1694.html"
  },
  {
    "id": "1695",
    "title": "寻踪者第三季",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1695.html"
  },
  {
    "id": "1696",
    "title": "真相猜·情·寻",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1696.html"
  },
  {
    "id": "1697",
    "title": "星尘兄弟的传说",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1697.html"
  },
  {
    "id": "1698",
    "title": "火线第五季",
    "year": "2008",
    "region": "美国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1698.html"
  },
  {
    "id": "1699",
    "title": "老子是魔法少女",
    "year": "2018",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画青春",
    "url": "movie/movie-1699.html"
  },
  {
    "id": "1700",
    "title": "猎恶游戏国语",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1700.html"
  },
  {
    "id": "1701",
    "title": "阿拉德：宿命之门",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "category": "华语热播",
    "url": "movie/movie-1701.html"
  },
  {
    "id": "1702",
    "title": "最后的乘客",
    "year": "2027",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1702.html"
  },
  {
    "id": "1703",
    "title": "小流氓",
    "year": "2021",
    "region": "中国香港",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1703.html"
  },
  {
    "id": "1704",
    "title": "古惑仔：江湖新秩序",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1704.html"
  },
  {
    "id": "1705",
    "title": "闺房乐",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1705.html"
  },
  {
    "id": "1706",
    "title": "呼啸山庄1992国语",
    "year": "1992",
    "region": "英国 / 美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1706.html"
  },
  {
    "id": "1707",
    "title": "阿加莎与伊什塔尔的诅咒",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1707.html"
  },
  {
    "id": "1708",
    "title": "倒凤颠鸾",
    "year": "2016",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1708.html"
  },
  {
    "id": "1709",
    "title": "调包富少的逆袭",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1709.html"
  },
  {
    "id": "1710",
    "title": "月夜闪灵",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1710.html"
  },
  {
    "id": "1711",
    "title": "超能小怪兽：新班级",
    "year": "2026",
    "region": "中国大陆",
    "type": "儿童科幻动画剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1711.html"
  },
  {
    "id": "1712",
    "title": "越域重生 国语版",
    "year": "2019",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1712.html"
  },
  {
    "id": "1713",
    "title": "12孤汉",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1713.html"
  },
  {
    "id": "1714",
    "title": "再见的延续",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1714.html"
  },
  {
    "id": "1715",
    "title": "空屋情人",
    "year": "2028",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1715.html"
  },
  {
    "id": "1716",
    "title": "摇摆乐时代",
    "year": "1937",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1716.html"
  },
  {
    "id": "1717",
    "title": "圣塔芭芭拉的盛宴",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1717.html"
  },
  {
    "id": "1718",
    "title": "普罗米亚 前日谭",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1718.html"
  },
  {
    "id": "1719",
    "title": "战斗列车",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1719.html"
  },
  {
    "id": "1720",
    "title": "冲破天牢",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1720.html"
  },
  {
    "id": "1721",
    "title": "阿辛出头天",
    "year": "2024",
    "region": "新加坡 / 马来西亚",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1721.html"
  },
  {
    "id": "1722",
    "title": "1965眼中的巴黎",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1722.html"
  },
  {
    "id": "1723",
    "title": "江湖论剑实录",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1723.html"
  },
  {
    "id": "1724",
    "title": "我叫多麦特",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1724.html"
  },
  {
    "id": "1725",
    "title": "华严经",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1725.html"
  },
  {
    "id": "1726",
    "title": "猫和老鼠2014第二季",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1726.html"
  },
  {
    "id": "1727",
    "title": "咸鱼",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1727.html"
  },
  {
    "id": "1728",
    "title": "爱上火星男孩",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1728.html"
  },
  {
    "id": "1729",
    "title": "鸽子隧道",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1729.html"
  },
  {
    "id": "1730",
    "title": "山",
    "year": "2017",
    "region": "美国 / 瑞士",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1730.html"
  },
  {
    "id": "1731",
    "title": "酋长的男人",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1731.html"
  },
  {
    "id": "1732",
    "title": "楚乔传",
    "year": "2017",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1732.html"
  },
  {
    "id": "1733",
    "title": "五女拜寿",
    "year": "1984",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1733.html"
  },
  {
    "id": "1734",
    "title": "情人与陌生人",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1734.html"
  },
  {
    "id": "1735",
    "title": "达达达达达利！",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1735.html"
  },
  {
    "id": "1736",
    "title": "风间公亲－教场0－",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1736.html"
  },
  {
    "id": "1737",
    "title": "夏日练习曲",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1737.html"
  },
  {
    "id": "1738",
    "title": "感情生活",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1738.html"
  },
  {
    "id": "1739",
    "title": "贞洁的荡妇",
    "year": "1972",
    "region": "意大利",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1739.html"
  },
  {
    "id": "1740",
    "title": "黑林城堡之犬",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1740.html"
  },
  {
    "id": "1741",
    "title": "纳尤古传奇",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1741.html"
  },
  {
    "id": "1742",
    "title": "裸体的孩子",
    "year": "2025",
    "region": "丹麦",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1742.html"
  },
  {
    "id": "1743",
    "title": "狱后人生",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1743.html"
  },
  {
    "id": "1744",
    "title": "预言魔咒",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1744.html"
  },
  {
    "id": "1745",
    "title": "性与犯罪",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1745.html"
  },
  {
    "id": "1746",
    "title": "无声的证言第二十八季",
    "year": "2026",
    "region": "英国",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1746.html"
  },
  {
    "id": "1747",
    "title": "冰上情缘2",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1747.html"
  },
  {
    "id": "1748",
    "title": "我记忆中的风琴",
    "year": "1999",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1748.html"
  },
  {
    "id": "1749",
    "title": "魔幻凶间",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1749.html"
  },
  {
    "id": "1750",
    "title": "飞人欧文斯",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1750.html"
  },
  {
    "id": "1751",
    "title": "五角大楼文件",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1751.html"
  },
  {
    "id": "1752",
    "title": "总统特务2",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1752.html"
  },
  {
    "id": "1753",
    "title": "钟楼怪人1996国语",
    "year": "1996",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1753.html"
  },
  {
    "id": "1754",
    "title": "期末考试",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1754.html"
  },
  {
    "id": "1755",
    "title": "香蕉劈裂",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1755.html"
  },
  {
    "id": "1756",
    "title": "血色玫瑰2之女子别动队",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1756.html"
  },
  {
    "id": "1757",
    "title": "小提琴家",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1757.html"
  },
  {
    "id": "1758",
    "title": "法医学者柚木贵志的案件",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1758.html"
  },
  {
    "id": "1759",
    "title": "绵羊侦探团",
    "year": "2024",
    "region": "英国 / 新西兰",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1759.html"
  },
  {
    "id": "1760",
    "title": "柘榴坂的复仇",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1760.html"
  },
  {
    "id": "1761",
    "title": "闪电侠第六季",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1761.html"
  },
  {
    "id": "1762",
    "title": "桃李劫",
    "year": "2022",
    "region": "中国大陆",
    "type": "古装情感片",
    "category": "经典年代",
    "url": "movie/movie-1762.html"
  },
  {
    "id": "1763",
    "title": "命运疾走中",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1763.html"
  },
  {
    "id": "1764",
    "title": "暂停！智序重组",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1764.html"
  },
  {
    "id": "1765",
    "title": "厄舍古厦的倒塌",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1765.html"
  },
  {
    "id": "1766",
    "title": "我是格鲁特第一季",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1766.html"
  },
  {
    "id": "1767",
    "title": "危机抢救",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1767.html"
  },
  {
    "id": "1768",
    "title": "夜间",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1768.html"
  },
  {
    "id": "1769",
    "title": "盛夏汁爱",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1769.html"
  },
  {
    "id": "1770",
    "title": "教授与疯子",
    "year": "2021",
    "region": "英国/美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1770.html"
  },
  {
    "id": "1771",
    "title": "白箱",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1771.html"
  },
  {
    "id": "1772",
    "title": "骨头社",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1772.html"
  },
  {
    "id": "1773",
    "title": "喂，太宰",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1773.html"
  },
  {
    "id": "1774",
    "title": "捉个九尾狐做女友2",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1774.html"
  },
  {
    "id": "1775",
    "title": "食人魔餐厅",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1775.html"
  },
  {
    "id": "1776",
    "title": "天启·惊蛰变",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1776.html"
  },
  {
    "id": "1777",
    "title": "作家秘史",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1777.html"
  },
  {
    "id": "1778",
    "title": "冒牌搭档",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1778.html"
  },
  {
    "id": "1779",
    "title": "致命名媛之夜",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1779.html"
  },
  {
    "id": "1780",
    "title": "嗨放派第三季",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "category": "经典年代",
    "url": "movie/movie-1780.html"
  },
  {
    "id": "1781",
    "title": "群斗",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1781.html"
  },
  {
    "id": "1782",
    "title": "铁血战士：狩猎追击",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1782.html"
  },
  {
    "id": "1783",
    "title": "一切皆爱",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1783.html"
  },
  {
    "id": "1784",
    "title": "尸前想后",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1784.html"
  },
  {
    "id": "1785",
    "title": "归来的醉汉",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1785.html"
  },
  {
    "id": "1786",
    "title": "性梦爱三部曲：爱",
    "year": "2024",
    "region": "挪威",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1786.html"
  },
  {
    "id": "1787",
    "title": "飞天大战2",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1787.html"
  },
  {
    "id": "1788",
    "title": "八十天环游地球",
    "year": "2026",
    "region": "美国 / 英国",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1788.html"
  },
  {
    "id": "1789",
    "title": "好像也没那么热血沸腾",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1789.html"
  },
  {
    "id": "1790",
    "title": "财迷心窍",
    "year": "2024",
    "region": "大陆",
    "type": "Movie",
    "category": "高分片库",
    "url": "movie/movie-1790.html"
  },
  {
    "id": "1791",
    "title": "春色梨花",
    "year": "1998",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1791.html"
  },
  {
    "id": "1792",
    "title": "黑暗中的两个人",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1792.html"
  },
  {
    "id": "1793",
    "title": "永远是我的女孩",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "高分片库",
    "url": "movie/movie-1793.html"
  },
  {
    "id": "1794",
    "title": "荒林艳骨",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1794.html"
  },
  {
    "id": "1795",
    "title": "昨日奇迹",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1795.html"
  },
  {
    "id": "1796",
    "title": "你也差不多该死心了！",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1796.html"
  },
  {
    "id": "1797",
    "title": "林肯在伊利诺斯",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1797.html"
  },
  {
    "id": "1798",
    "title": "最后的海洋",
    "year": "2019",
    "region": "美国 / 加拿大",
    "type": "纪录片",
    "category": "动画青春",
    "url": "movie/movie-1798.html"
  },
  {
    "id": "1799",
    "title": "情人们",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1799.html"
  },
  {
    "id": "1800",
    "title": "墨西哥风暴",
    "year": "2025",
    "region": "墨西哥",
    "type": "电视剧",
    "category": "动作犯罪",
    "url": "movie/movie-1800.html"
  },
  {
    "id": "1801",
    "title": "就是那个家伙",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1801.html"
  },
  {
    "id": "1802",
    "title": "孤独的心",
    "year": "2026",
    "region": "法国 / 德国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1802.html"
  },
  {
    "id": "1803",
    "title": "龙王子第一季",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1803.html"
  },
  {
    "id": "1804",
    "title": "杰克与仙豆茎",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1804.html"
  },
  {
    "id": "1805",
    "title": "诗词中国",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1805.html"
  },
  {
    "id": "1806",
    "title": "省亲日",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1806.html"
  },
  {
    "id": "1807",
    "title": "蝴蝶风暴",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1807.html"
  },
  {
    "id": "1808",
    "title": "刀剑神域第一季",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1808.html"
  },
  {
    "id": "1809",
    "title": "银河铁道之父",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1809.html"
  },
  {
    "id": "1810",
    "title": "花煞",
    "year": "1985",
    "region": "香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1810.html"
  },
  {
    "id": "1811",
    "title": "旱季",
    "year": "2025",
    "region": "尼日利亚",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1811.html"
  },
  {
    "id": "1812",
    "title": "异人君莫邪",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1812.html"
  },
  {
    "id": "1813",
    "title": "安静的乡村女人",
    "year": "2008",
    "region": "法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1813.html"
  },
  {
    "id": "1814",
    "title": "我的警察情人",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "亚洲精选",
    "url": "movie/movie-1814.html"
  },
  {
    "id": "1815",
    "title": "在咖啡冷掉之前",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1815.html"
  },
  {
    "id": "1816",
    "title": "古堡情欲",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1816.html"
  },
  {
    "id": "1817",
    "title": "满堂春",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "奇幻科幻",
    "url": "movie/movie-1817.html"
  },
  {
    "id": "1818",
    "title": "少年汉尼拔",
    "year": "2025",
    "region": "美国/立陶宛",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1818.html"
  },
  {
    "id": "1819",
    "title": "济公新传",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1819.html"
  },
  {
    "id": "1820",
    "title": "武林外外传",
    "year": "2011",
    "region": "中国内地",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1820.html"
  },
  {
    "id": "1821",
    "title": "里德：墨西哥起义",
    "year": "2025",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1821.html"
  },
  {
    "id": "1822",
    "title": "戏剧性谋杀",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "category": "日韩风情",
    "url": "movie/movie-1822.html"
  },
  {
    "id": "1823",
    "title": "银之守墓人第二季",
    "year": "2026",
    "region": "日本",
    "type": "动漫",
    "category": "华语热播",
    "url": "movie/movie-1823.html"
  },
  {
    "id": "1824",
    "title": "北风",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1824.html"
  },
  {
    "id": "1825",
    "title": "当你约会的时候",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "华语热播",
    "url": "movie/movie-1825.html"
  },
  {
    "id": "1826",
    "title": "谁杀了她",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1826.html"
  },
  {
    "id": "1827",
    "title": "我们俩的婚姻",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1827.html"
  },
  {
    "id": "1828",
    "title": "何不同舟渡",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1828.html"
  },
  {
    "id": "1829",
    "title": "突击隆美尔",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1829.html"
  },
  {
    "id": "1830",
    "title": "飞吧开天龙",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1830.html"
  },
  {
    "id": "1831",
    "title": "玛丽苏遇上杰克苏",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1831.html"
  },
  {
    "id": "1832",
    "title": "兄弟英雄",
    "year": "2018",
    "region": "中国大陆",
    "type": "都市动作片",
    "category": "奇幻科幻",
    "url": "movie/movie-1832.html"
  },
  {
    "id": "1833",
    "title": "魔法圣婴",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1833.html"
  },
  {
    "id": "1834",
    "title": "爵士乐政变大阴谋",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1834.html"
  },
  {
    "id": "1835",
    "title": "情妇",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1835.html"
  },
  {
    "id": "1836",
    "title": "这个丑陋又美丽的世界",
    "year": "2004",
    "region": "日本",
    "type": "动画剧集",
    "category": "亚洲精选",
    "url": "movie/movie-1836.html"
  },
  {
    "id": "1837",
    "title": "挛爱大龙凤",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1837.html"
  },
  {
    "id": "1838",
    "title": "同一屋檐下2",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑剧情",
    "url": "movie/movie-1838.html"
  },
  {
    "id": "1839",
    "title": "乌鸦1943",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1839.html"
  },
  {
    "id": "1840",
    "title": "来自星星的你",
    "year": "2013",
    "region": "韩国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1840.html"
  },
  {
    "id": "1841",
    "title": "孭镬特工队",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1841.html"
  },
  {
    "id": "1842",
    "title": "穷友记第四季",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1842.html"
  },
  {
    "id": "1843",
    "title": "雪崩王子",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1843.html"
  },
  {
    "id": "1844",
    "title": "佛尼吉亚的霍华一家",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1844.html"
  },
  {
    "id": "1845",
    "title": "天降神机",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1845.html"
  },
  {
    "id": "1846",
    "title": "柔道场",
    "year": "1974",
    "region": "日本",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1846.html"
  },
  {
    "id": "1847",
    "title": "暖暖的微笑",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1847.html"
  },
  {
    "id": "1848",
    "title": "暴风一族",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1848.html"
  },
  {
    "id": "1849",
    "title": "来者何人",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1849.html"
  },
  {
    "id": "1850",
    "title": "我的街区",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1850.html"
  },
  {
    "id": "1851",
    "title": "重案六组4",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1851.html"
  },
  {
    "id": "1852",
    "title": "怪兽王哥斯拉",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1852.html"
  },
  {
    "id": "1853",
    "title": "冲浪英豪",
    "year": "2024",
    "region": "美国 / 澳大利亚",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1853.html"
  },
  {
    "id": "1854",
    "title": "野性玉女",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1854.html"
  },
  {
    "id": "1855",
    "title": "重生之时",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "经典年代",
    "url": "movie/movie-1855.html"
  },
  {
    "id": "1856",
    "title": "比翼双飞",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1856.html"
  },
  {
    "id": "1857",
    "title": "生活的梦想",
    "year": "2020",
    "region": "意大利",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1857.html"
  },
  {
    "id": "1858",
    "title": "被涂污的鸟",
    "year": "2024",
    "region": "捷克",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1858.html"
  },
  {
    "id": "1859",
    "title": "华德翰的华尔滋",
    "year": "2027",
    "region": "奥地利",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1859.html"
  },
  {
    "id": "1860",
    "title": "马耳他之鹰",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1860.html"
  },
  {
    "id": "1861",
    "title": "追凶 第一季",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1861.html"
  },
  {
    "id": "1862",
    "title": "宁静的夏天",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1862.html"
  },
  {
    "id": "1863",
    "title": "同是家人曾相识",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1863.html"
  },
  {
    "id": "1864",
    "title": "蓝眼武士",
    "year": "2024",
    "region": "美国 / 日本",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1864.html"
  },
  {
    "id": "1865",
    "title": "爱过了",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1865.html"
  },
  {
    "id": "1866",
    "title": "邪恶根本不存在",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1866.html"
  },
  {
    "id": "1867",
    "title": "刘伯温传奇",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1867.html"
  },
  {
    "id": "1868",
    "title": "车王",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "url": "movie/movie-1868.html"
  },
  {
    "id": "1869",
    "title": "暂无出口",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1869.html"
  },
  {
    "id": "1870",
    "title": "爱斗大国语",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1870.html"
  },
  {
    "id": "1871",
    "title": "杀戮影片",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1871.html"
  },
  {
    "id": "1872",
    "title": "着魔2024",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1872.html"
  },
  {
    "id": "1873",
    "title": "乙未豪客传奇",
    "year": "1991",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1873.html"
  },
  {
    "id": "1874",
    "title": "我们的田野",
    "year": "1983",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1874.html"
  },
  {
    "id": "1875",
    "title": "锥镇物语",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1875.html"
  },
  {
    "id": "1876",
    "title": "极速之星",
    "year": "2027",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1876.html"
  },
  {
    "id": "1877",
    "title": "ㄎㄧㄤ爆好麻吉",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1877.html"
  },
  {
    "id": "1878",
    "title": "神殿奇兵",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1878.html"
  },
  {
    "id": "1879",
    "title": "怒放",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1879.html"
  },
  {
    "id": "1880",
    "title": "美女足球队",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1880.html"
  },
  {
    "id": "1881",
    "title": "弊端",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1881.html"
  },
  {
    "id": "1882",
    "title": "杜鹃的女儿",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1882.html"
  },
  {
    "id": "1883",
    "title": "颜心记",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "日韩风情",
    "url": "movie/movie-1883.html"
  },
  {
    "id": "1884",
    "title": "来都来了",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1884.html"
  },
  {
    "id": "1885",
    "title": "犬部！",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1885.html"
  },
  {
    "id": "1886",
    "title": "生死相随",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1886.html"
  },
  {
    "id": "1887",
    "title": "某种生活",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1887.html"
  },
  {
    "id": "1888",
    "title": "玛蒂尔达：音乐剧",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1888.html"
  },
  {
    "id": "1889",
    "title": "爱你变成害你",
    "year": "1975",
    "region": "中国香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1889.html"
  },
  {
    "id": "1890",
    "title": "地藏王神农巨兽",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1890.html"
  },
  {
    "id": "1891",
    "title": "少女十五十六时",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1891.html"
  },
  {
    "id": "1892",
    "title": "原子少年2",
    "year": "2024",
    "region": "中国台湾",
    "type": "综艺",
    "category": "悬疑剧情",
    "url": "movie/movie-1892.html"
  },
  {
    "id": "1893",
    "title": "同车异路",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1893.html"
  },
  {
    "id": "1894",
    "title": "世界之歌",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1894.html"
  },
  {
    "id": "1895",
    "title": "野营",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1895.html"
  },
  {
    "id": "1896",
    "title": "青春似火",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1896.html"
  },
  {
    "id": "1897",
    "title": "大力士",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "category": "经典年代",
    "url": "movie/movie-1897.html"
  },
  {
    "id": "1898",
    "title": "战略阴谋：神鬼狙击手",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1898.html"
  },
  {
    "id": "1899",
    "title": "阿洛伊斯",
    "year": "2024",
    "region": "瑞士",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1899.html"
  },
  {
    "id": "1900",
    "title": "小镇总理",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1900.html"
  },
  {
    "id": "1901",
    "title": "为何是吴秀在",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1901.html"
  },
  {
    "id": "1902",
    "title": "大明疑案",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1902.html"
  },
  {
    "id": "1903",
    "title": "少年安乐死",
    "year": "2025",
    "region": "欧洲 (多国)",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1903.html"
  },
  {
    "id": "1904",
    "title": "企鹅",
    "year": "2022",
    "region": "中国",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1904.html"
  },
  {
    "id": "1905",
    "title": "天河之恋",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1905.html"
  },
  {
    "id": "1906",
    "title": "飞越谜情国语",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1906.html"
  },
  {
    "id": "1907",
    "title": "布努埃尔在海龟的迷宫",
    "year": "2025",
    "region": "西班牙/法国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1907.html"
  },
  {
    "id": "1908",
    "title": "万界至尊",
    "year": "2026",
    "region": "中国内地",
    "type": "剧集",
    "category": "动画青春",
    "url": "movie/movie-1908.html"
  },
  {
    "id": "1909",
    "title": "一吻巴黎",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1909.html"
  },
  {
    "id": "1910",
    "title": "金孙爆富攻略",
    "year": "2024",
    "region": "泰国",
    "type": "Movie",
    "category": "华语热播",
    "url": "movie/movie-1910.html"
  },
  {
    "id": "1911",
    "title": "埃加罗",
    "year": "2025",
    "region": "西班牙",
    "type": "剧集",
    "category": "喜剧家庭",
    "url": "movie/movie-1911.html"
  },
  {
    "id": "1912",
    "title": "猎头",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1912.html"
  },
  {
    "id": "1913",
    "title": "公文包",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1913.html"
  },
  {
    "id": "1914",
    "title": "美梦成真2015",
    "year": "2015",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1914.html"
  },
  {
    "id": "1915",
    "title": "生死边沿",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1915.html"
  },
  {
    "id": "1916",
    "title": "超越我们的差异",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1916.html"
  },
  {
    "id": "1917",
    "title": "汉娜的驱魔",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1917.html"
  },
  {
    "id": "1918",
    "title": "海底小纵队：火焰之环",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1918.html"
  },
  {
    "id": "1919",
    "title": "女士的品格",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1919.html"
  },
  {
    "id": "1920",
    "title": "塑造未来",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "category": "日韩风情",
    "url": "movie/movie-1920.html"
  },
  {
    "id": "1921",
    "title": "卡美洛",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1921.html"
  },
  {
    "id": "1922",
    "title": "卡车斗士",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1922.html"
  },
  {
    "id": "1923",
    "title": "海啸鲨机",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1923.html"
  },
  {
    "id": "1924",
    "title": "虐会",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1924.html"
  },
  {
    "id": "1925",
    "title": "生死大营救",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "亚洲精选",
    "url": "movie/movie-1925.html"
  },
  {
    "id": "1926",
    "title": "声临其境 宝藏配音间",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺 / 纪录片",
    "category": "动画青春",
    "url": "movie/movie-1926.html"
  },
  {
    "id": "1927",
    "title": "幸福汤屋",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1927.html"
  },
  {
    "id": "1928",
    "title": "羞耻第四季",
    "year": "2017",
    "region": "挪威",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1928.html"
  },
  {
    "id": "1929",
    "title": "英雄气概",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1929.html"
  },
  {
    "id": "1930",
    "title": "白蛇：缘起",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1930.html"
  },
  {
    "id": "1931",
    "title": "恐龙当家",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "category": "经典年代",
    "url": "movie/movie-1931.html"
  },
  {
    "id": "1932",
    "title": "亲爱的莱蒙丽玛",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1932.html"
  },
  {
    "id": "1933",
    "title": "单亲妈妈",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "华语热播",
    "url": "movie/movie-1933.html"
  },
  {
    "id": "1934",
    "title": "好运理发师",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1934.html"
  },
  {
    "id": "1935",
    "title": "探寻深海火山",
    "year": "2018",
    "region": "英国",
    "type": "Documentary",
    "category": "经典年代",
    "url": "movie/movie-1935.html"
  },
  {
    "id": "1936",
    "title": "飞天圣战",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1936.html"
  },
  {
    "id": "1937",
    "title": "亨利的柏林假期",
    "year": "2025",
    "region": "德国 / 法国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1937.html"
  },
  {
    "id": "1938",
    "title": "风流女明星",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1938.html"
  },
  {
    "id": "1939",
    "title": "夸家庭聚会",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影 / 喜剧",
    "category": "华语热播",
    "url": "movie/movie-1939.html"
  },
  {
    "id": "1940",
    "title": "血教育",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1940.html"
  },
  {
    "id": "1941",
    "title": "超人之死与归来",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "category": "亚洲精选",
    "url": "movie/movie-1941.html"
  },
  {
    "id": "1942",
    "title": "猎艳情歌",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1942.html"
  },
  {
    "id": "1943",
    "title": "酣歌畅戏",
    "year": "1999",
    "region": "英国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1943.html"
  },
  {
    "id": "1944",
    "title": "美丽的声音",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "category": "日韩风情",
    "url": "movie/movie-1944.html"
  },
  {
    "id": "1945",
    "title": "精装追女仔之2",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1945.html"
  },
  {
    "id": "1946",
    "title": "辣手美人",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1946.html"
  },
  {
    "id": "1947",
    "title": "不死情谜粤语",
    "year": "2001",
    "region": "中国香港",
    "type": "电影",
    "category": "动作犯罪",
    "url": "movie/movie-1947.html"
  },
  {
    "id": "1948",
    "title": "我会找到路",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "高分片库",
    "url": "movie/movie-1948.html"
  },
  {
    "id": "1949",
    "title": "纵欲",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1949.html"
  },
  {
    "id": "1950",
    "title": "断肠云雨热情花",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1950.html"
  },
  {
    "id": "1951",
    "title": "醒木",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1951.html"
  },
  {
    "id": "1952",
    "title": "大雄与机器人王国",
    "year": "2002",
    "region": "日本",
    "type": "动画电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1952.html"
  },
  {
    "id": "1953",
    "title": "昆仑神宫2022",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "高分片库",
    "url": "movie/movie-1953.html"
  },
  {
    "id": "1954",
    "title": "空中浩劫第十一季",
    "year": "2011",
    "region": "加拿大",
    "type": "剧集",
    "category": "动作犯罪",
    "url": "movie/movie-1954.html"
  },
  {
    "id": "1955",
    "title": "私人银行家",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑剧情",
    "url": "movie/movie-1955.html"
  },
  {
    "id": "1956",
    "title": "阿拉丁和神灯",
    "year": "2020",
    "region": "法国 / 比利时",
    "type": "电影",
    "category": "经典年代",
    "url": "movie/movie-1956.html"
  },
  {
    "id": "1957",
    "title": "卡农",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1957.html"
  },
  {
    "id": "1958",
    "title": "伊莉莎伯泰莱倾城艳",
    "year": "1955",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1958.html"
  },
  {
    "id": "1959",
    "title": "银色猎物",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1959.html"
  },
  {
    "id": "1960",
    "title": "性博士",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1960.html"
  },
  {
    "id": "1961",
    "title": "郎朗演奏迪士尼",
    "year": "2023",
    "region": "美国",
    "type": "电影 / 音乐会纪录片",
    "category": "动画青春",
    "url": "movie/movie-1961.html"
  },
  {
    "id": "1962",
    "title": "为爱孕狂",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1962.html"
  },
  {
    "id": "1963",
    "title": "天劫高手",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1963.html"
  },
  {
    "id": "1964",
    "title": "寻找左宗棠",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1964.html"
  },
  {
    "id": "1965",
    "title": "黑玫瑰之义结金兰",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "category": "喜剧家庭",
    "url": "movie/movie-1965.html"
  },
  {
    "id": "1966",
    "title": "至善如金",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1966.html"
  },
  {
    "id": "1967",
    "title": "新婚",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "动画青春",
    "url": "movie/movie-1967.html"
  },
  {
    "id": "1968",
    "title": "与幽灵同在的夏日",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "华语热播",
    "url": "movie/movie-1968.html"
  },
  {
    "id": "1969",
    "title": "制造性丑闻",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "奇幻科幻",
    "url": "movie/movie-1969.html"
  },
  {
    "id": "1970",
    "title": "红色房间",
    "year": "2023",
    "region": "法国 / 加拿大",
    "type": "电影",
    "category": "亚洲精选",
    "url": "movie/movie-1970.html"
  },
  {
    "id": "1971",
    "title": "强剑粤语",
    "year": "1998",
    "region": "中国香港",
    "type": "剧集",
    "category": "华语热播",
    "url": "movie/movie-1971.html"
  },
  {
    "id": "1972",
    "title": "安达与岛村",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "高分片库",
    "url": "movie/movie-1972.html"
  },
  {
    "id": "1973",
    "title": "胖宝的春天",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动画青春",
    "url": "movie/movie-1973.html"
  },
  {
    "id": "1974",
    "title": "晚期四重奏",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "category": "悬疑剧情",
    "url": "movie/movie-1974.html"
  },
  {
    "id": "1975",
    "title": "隔篱屋有宝",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "category": "奇幻科幻",
    "url": "movie/movie-1975.html"
  }
];
