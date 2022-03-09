var tipuesearch = {"pages": [{'title': 'About', 'text': '40923125 cd2022 \n', 'tags': '', 'url': 'About.html'}, {'title': '倉儲建立', 'text': '\n', 'tags': '', 'url': '倉儲建立.html'}, {'title': '小組連結', 'text': '根據\xa0 https://mde.tw/cd2022_guide/content/Grouping.html \xa0 中的 2b 程式執行, 配合 \xa0 https://mde.tw/studlist/2022spring/2a.txt \xa0 修改為能夠直接在頁面顯示各組員的 cd2022 倉儲與網頁連結, 以及各學員協同大分組倉儲與網頁連結 (例如: cd2022ag1). \n', 'tags': '', 'url': '小組連結.html'}, {'title': '建立方式', 'text': '利用 run 跑 grp_2022.py ,但需要更改取樣為 2a.txt ,並且調整小組之固定變數B改A \n from browser import html\nfrom browser import document\nimport random\n\nbrython_div = document["brython_div"]\n\n# 根據 href 與 content 將 html 元件中的 anchor 插入頁面\ndef makeLink(href, content):\n    brython_div <= html.A(content, href=href)\n    #brython_div <= html.BR()\n\naorb = "a"\nurl = "https://mde.tw/studlist/2022spring/2a.txt"\ncourse = "cd2022"\n# 從 url 讀取資料後, 以跳行符號分割資料進入數列後\n# 去除數列中的第一筆與最後一筆資料後可得每位學員所填的資料\ndata = open(url).read().split("\\n")[1:-1]\n#print(data)\n# 再以 \\t 分割每位學員的資料, \n#可以取得每位學員的學號, github 帳號與組別\nbig = []\nnum_github = {}\nfor i in data:\n    stud_no, github, grp_no = i.split("\\t")\n    #print(stud_no, github, grp_no)\n    big.append([stud_no, github, grp_no])\n    if github != "":\n        num_github[stud_no] = github\n    else:\n        num_github[stud_no] = stud_no\n#print(big)\n# 根據每一 element 的第三個 element sort\nbig.sort(key = lambda x: x[2])\n# big 已經按照組別排序\n#print(big)\nungrouped = []\ngrouped = []\nfor i in big:\n    if i[2] == "":\n        ungrouped.append(i[0])\n    else:\n        # 將組別放到第一位置\n        grouped.append([i[2], i[0]])\n#print(grouped)\n#print(ungrouped)\nd = {}\n# 逐一檢視 grouped 數列\nfor i in grouped:\n    # 若該組序已存在 d dict 中,\n    # 則以 extend() 納入除組序之外的組員學號\n    if i[0] in d:\n        d[i[0]].extend(i[1:])\n        #print("i[0] in d:",i[0], "d:", d)\n    else:\n        # 若已納分組的 element 中之組序為全新組序,\n        # 則將該已納分組的 element 放入 dict 首位元素\n        # 準備透過 extend() 納入其他組員學號\n        d[i[0]] = i\n        #print("i i[0] not in d:", i, "d:", d)\n#print("finally d:", d, "d.values():", d.values())\ngroup_member = list(d.values())\n# group_member 第一位為組序, 隨後為組員學號\n#print(group_member)\nrandom.shuffle(ungrouped)\n#print("ungrouped:" + str(len(ungrouped)))\ngrp = 1\ngroup = []\nfor i in group_member:\n    #print("grp " + str(i[0]) + ": num, " + str(len(i[1:])))\n    if len(i[1:]) < 8:\n        #print("can take " + str(8 - len(i[1:])) + "members")\n        # 若仍有學員未納組, 則可根據缺額補入學員學號\n        try:\n            #print("add " + str(ungrouped[:8-len(i[1:])]))\n            i.extend(list(ungrouped[:8-len(i[1:])]))\n            # 拿掉已經分配組別的學員學號\n            ungrouped = ungrouped[8-len(i[1:]):]\n        except:\n            #print("no member to add!")\n            pass\n    else:\n        #print("full")\n        pass\n    # 根據增量決定組序\n    i[0] = str(grp)\n    group.append(i)\n    grp += 1\n#print(group)\nfor i in group:\n    brython_div <= "第" + str(i[0]) + "組:" + html.BR()\n    grp_repo = course + aorb + "g" + str(i[0])\n    for num in i[1:]:\n        # num 為各組組員學號\n        #print(num)\n        studhref = "https://"+ str(num_github[num]) + ".github.io/" + course\n        repohref = "https://github.com/"+ str(num_github[num]) +"/"+course\n        grphref = "https://"+ str(num_github[num]) + ".github.io/" + grp_repo\n        grp_repohref = "https://github.com/"+ str(num_github[num]) +"/" + grp_repo       \n        brython_div <= "repo: "\n        makeLink(repohref, str(num))\n        brython_div <= " www: "\n        makeLink(studhref, str(num))\n        brython_div <= " " + grp_repo + "-repo: "\n        makeLink(grp_repohref, str(num))\n        brython_div <= " " + grp_repo + "-www: "\n        makeLink(grphref, str(num))\n        brython_div <= html.BR()\nprint("done") \n \n', 'tags': '', 'url': '建立方式.html'}, {'title': '結果', 'text': '第1組: repo: \xa0 40923131 \xa0 www: \xa0 40923131 \xa0 cd2022ag1-repo: \xa0 40923131 \xa0 cd2022ag1-www: \xa0 40923131 repo: \xa0 40923138 \xa0 www: \xa0 40923138 \xa0 cd2022ag1-repo: \xa0 40923138 \xa0 cd2022ag1-www: \xa0 40923138 repo: \xa0 40923157 \xa0 www: \xa0 40923157 \xa0 cd2022ag1-repo: \xa0 40923157 \xa0 cd2022ag1-www: \xa0 40923157 第2組: repo: \xa0 40923101 \xa0 www: \xa0 40923101 \xa0 cd2022ag2-repo: \xa0 40923101 \xa0 cd2022ag2-www: \xa0 40923101 repo: \xa0 40923103 \xa0 www: \xa0 40923103 \xa0 cd2022ag2-repo: \xa0 40923103 \xa0 cd2022ag2-www: \xa0 40923103 repo: \xa0 40923108 \xa0 www: \xa0 40923108 \xa0 cd2022ag2-repo: \xa0 40923108 \xa0 cd2022ag2-www: \xa0 40923108 repo: \xa0 40923137 \xa0 www: \xa0 40923137 \xa0 cd2022ag2-repo: \xa0 40923137 \xa0 cd2022ag2-www: \xa0 40923137 repo: \xa0 40923154 \xa0 www: \xa0 40923154 \xa0 cd2022ag2-repo: \xa0 40923154 \xa0 cd2022ag2-www: \xa0 40923154 repo: \xa0 40923156 \xa0 www: \xa0 40923156 \xa0 cd2022ag2-repo: \xa0 40923156 \xa0 cd2022ag2-www: \xa0 40923156 repo: \xa0 40923119 \xa0 www: \xa0 40923119 \xa0 cd2022ag2-repo: \xa0 40923119 \xa0 cd2022ag2-www: \xa0 40923119 repo: \xa0 40971134 \xa0 www: \xa0 40971134 \xa0 cd2022ag2-repo: \xa0 40971134 \xa0 cd2022ag2-www: \xa0 40971134 第3組: repo: \xa0 40923102 \xa0 www: \xa0 40923102 \xa0 cd2022ag3-repo: \xa0 40923102 \xa0 cd2022ag3-www: \xa0 40923102 repo: \xa0 40923104 \xa0 www: \xa0 40923104 \xa0 cd2022ag3-repo: \xa0 40923104 \xa0 cd2022ag3-www: \xa0 40923104 repo: \xa0 40923105 \xa0 www: \xa0 40923105 \xa0 cd2022ag3-repo: \xa0 40923105 \xa0 cd2022ag3-www: \xa0 40923105 repo: \xa0 40923106 \xa0 www: \xa0 40923106 \xa0 cd2022ag3-repo: \xa0 40923106 \xa0 cd2022ag3-www: \xa0 40923106 repo: \xa0 40923107 \xa0 www: \xa0 40923107 \xa0 cd2022ag3-repo: \xa0 40923107 \xa0 cd2022ag3-www: \xa0 40923107 repo: \xa0 40923110 \xa0 www: \xa0 40923110 \xa0 cd2022ag3-repo: \xa0 40923110 \xa0 cd2022ag3-www: \xa0 40923110 第4組: repo: \xa0 40923109 \xa0 www: \xa0 40923109 \xa0 cd2022ag4-repo: \xa0 40923109 \xa0 cd2022ag4-www: \xa0 40923109 repo: \xa0 40923111 \xa0 www: \xa0 40923111 \xa0 cd2022ag4-repo: \xa0 40923111 \xa0 cd2022ag4-www: \xa0 40923111 repo: \xa0 40923114 \xa0 www: \xa0 40923114 \xa0 cd2022ag4-repo: \xa0 40923114 \xa0 cd2022ag4-www: \xa0 40923114 repo: \xa0 40923115 \xa0 www: \xa0 40923115 \xa0 cd2022ag4-repo: \xa0 40923115 \xa0 cd2022ag4-www: \xa0 40923115 repo: \xa0 40923122 \xa0 www: \xa0 40923122 \xa0 cd2022ag4-repo: \xa0 40923122 \xa0 cd2022ag4-www: \xa0 40923122 repo: \xa0 40923129 \xa0 www: \xa0 40923129 \xa0 cd2022ag4-repo: \xa0 40923129 \xa0 cd2022ag4-www: \xa0 40923129 repo: \xa0 40923146 \xa0 www: \xa0 40923146 \xa0 cd2022ag4-repo: \xa0 40923146 \xa0 cd2022ag4-www: \xa0 40923146 repo: \xa0 40923148 \xa0 www: \xa0 40923148 \xa0 cd2022ag4-repo: \xa0 40923148 \xa0 cd2022ag4-www: \xa0 40923148 第5組: repo: \xa0 40923116 \xa0 www: \xa0 40923116 \xa0 cd2022ag5-repo: \xa0 40923116 \xa0 cd2022ag5-www: \xa0 40923116 repo: \xa0 40923124 \xa0 www: \xa0 40923124 \xa0 cd2022ag5-repo: \xa0 40923124 \xa0 cd2022ag5-www: \xa0 40923124 repo: \xa0 40923125 \xa0 www: \xa0 40923125 \xa0 cd2022ag5-repo: \xa0 40923125 \xa0 cd2022ag5-www: \xa0 40923125 repo: \xa0 40923126 \xa0 www: \xa0 40923126 \xa0 cd2022ag5-repo: \xa0 40923126 \xa0 cd2022ag5-www: \xa0 40923126 repo: \xa0 40923127 \xa0 www: \xa0 40923127 \xa0 cd2022ag5-repo: \xa0 40923127 \xa0 cd2022ag5-www: \xa0 40923127 repo: \xa0 40923128 \xa0 www: \xa0 40923128 \xa0 cd2022ag5-repo: \xa0 40923128 \xa0 cd2022ag5-www: \xa0 40923128 第6組: repo: \xa0 40923123 \xa0 www: \xa0 40923123 \xa0 cd2022ag6-repo: \xa0 40923123 \xa0 cd2022ag6-www: \xa0 40923123 repo: \xa0 40923133 \xa0 www: \xa0 40923133 \xa0 cd2022ag6-repo: \xa0 40923133 \xa0 cd2022ag6-www: \xa0 40923133 repo: \xa0 40923134 \xa0 www: \xa0 40923134 \xa0 cd2022ag6-repo: \xa0 40923134 \xa0 cd2022ag6-www: \xa0 40923134 repo: \xa0 40923135 \xa0 www: \xa0 40923135 \xa0 cd2022ag6-repo: \xa0 40923135 \xa0 cd2022ag6-www: \xa0 40923135 repo: \xa0 40923139 \xa0 www: \xa0 40923139 \xa0 cd2022ag6-repo: \xa0 40923139 \xa0 cd2022ag6-www: \xa0 40923139 repo: \xa0 40923142 \xa0 www: \xa0 40923142 \xa0 cd2022ag6-repo: \xa0 40923142 \xa0 cd2022ag6-www: \xa0 40923142 repo: \xa0 40923151 \xa0 www: \xa0 40923151 \xa0 cd2022ag6-repo: \xa0 40923151 \xa0 cd2022ag6-www: \xa0 40923151 第7組: repo: \xa0 40923113 \xa0 www: \xa0 40923113 \xa0 cd2022ag7-repo: \xa0 40923113 \xa0 cd2022ag7-www: \xa0 40923113 repo: \xa0 40923130 \xa0 www: \xa0 40923130 \xa0 cd2022ag7-repo: \xa0 40923130 \xa0 cd2022ag7-www: \xa0 40923130 repo: \xa0 40923140 \xa0 www: \xa0 40923140 \xa0 cd2022ag7-repo: \xa0 40923140 \xa0 cd2022ag7-www: \xa0 40923140 repo: \xa0 40923144 \xa0 www: \xa0 40923144 \xa0 cd2022ag7-repo: \xa0 40923144 \xa0 cd2022ag7-www: \xa0 40923144 repo: \xa0 40923149 \xa0 www: \xa0 40923149 \xa0 cd2022ag7-repo: \xa0 40923149 \xa0 cd2022ag7-www: \xa0 40923149 repo: \xa0 40923150 \xa0 www: \xa0 40923150 \xa0 cd2022ag7-repo: \xa0 40923150 \xa0 cd2022ag7-www: \xa0 40923150 repo: \xa0 40923152 \xa0 www: \xa0 40923152 \xa0 cd2022ag7-repo: \xa0 40923152 \xa0 cd2022ag7-www: \xa0 40923152 第8組: repo: \xa0 40623143 \xa0 www: \xa0 40623143 \xa0 cd2022ag8-repo: \xa0 40623143 \xa0 cd2022ag8-www: \xa0 40623143 repo: \xa0 40823132 \xa0 www: \xa0 40823132 \xa0 cd2022ag8-repo: \xa0 40823132 \xa0 cd2022ag8-www: \xa0 40823132 repo: \xa0 40823143 \xa0 www: \xa0 40823143 \xa0 cd2022ag8-repo: \xa0 40823143 \xa0 cd2022ag8-www: \xa0 40823143 repo: \xa0 40923117 \xa0 www: \xa0 40923117 \xa0 cd2022ag8-repo: \xa0 40923117 \xa0 cd2022ag8-www: \xa0 40923117 repo: \xa0 40923118 \xa0 www: \xa0 40923118 \xa0 cd2022ag8-repo: \xa0 40923118 \xa0 cd2022ag8-www: \xa0 40923118 repo: \xa0 40923120 \xa0 www: \xa0 40923120 \xa0 cd2022ag8-repo: \xa0 40923120 \xa0 cd2022ag8-www: \xa0 40923120 repo: \xa0 40923136 \xa0 www: \xa0 40923136 \xa0 cd2022ag8-repo: \xa0 40923136 \xa0 cd2022ag8-www: \xa0 40923136 repo: \xa0 40923143 \xa0 www: \xa0 40923143 \xa0 cd2022ag8-repo: \xa0 40923143 \xa0 cd2022ag8-www: \xa0 40923143 repo: \xa0 40923145 \xa0 www: \xa0 40923145 \xa0 cd2022ag8-repo: \xa0 40923145 \xa0 cd2022ag8-www: \xa0 40923145 repo: \xa0 40923147 \xa0 www: \xa0 40923147 \xa0 cd2022ag8-repo: \xa0 40923147 \xa0 cd2022ag8-www: \xa0 40923147 repo: \xa0 40923153 \xa0 www: \xa0 40923153 \xa0 cd2022ag8-repo: \xa0 40923153 \xa0 cd2022ag8-www: \xa0 40923153 repo: \xa0 40923121 \xa0 www: \xa0 40923121 \xa0 cd2022ag8-repo: \xa0 40923121 \xa0 cd2022ag8-www: \xa0 40923121 \n', 'tags': '', 'url': '結果.html'}, {'title': '每周進度', 'text': 'W1 \n 建立IPV6連線,下載 cadlab_network_setup.zip ,並在被封鎖網路前執行1_ipv6_network_setup.bat啟動檔,如果成功將不會再跳出網路封鎖訊息。內建會自行將網路轉至IPV6並設定Proxy \n 利用學校Email或於學校網路下載 NX1980_cd2022.7z NX可攜式 \n W2 \n 利用 cmsimd 子模組建立cd2022倉儲 \n 利用 grp_2022.py 程式使用 2a.txt 表單跑出分組名單', 'tags': '', 'url': '每周進度.html'}]};