#!/bin/sh

git_revert (){
	echo "Please enter your tag id or commit id."
	read input
	git reset --hard $input
	git push -f
}

git_clone (){

	echo "Enter a tag name, otherwise press enter"
   	read tag_id   
   	# echo "tag_id , $tag_id"
   	if ! [ -z "$tag_id" ]
   	then
   	   # echo "tag value, $tag_id"
   	   git clone -b $tag_id https://github.com/anup36/codelinkster_api.git
   	   cd codelinkster_api
   	   git checkout master
   	else
   		# echo "no tag value found"
   		git clone https://github.com/anup36/codelinkster_api.git
	fi

}

echo "Please Ener your Choice"
echo "1 -> git clone"
echo "2 -> git revert"
read choice

if [ "$choice" == "1" ]
then
   git_clone
elif [ "$choice" == "2" ]
then
	git_revert 
else
	echo "wrong choice"
	exit
fi


sleep 15

commit e4882d78914cf6f74fbdc2fb87c76b8ca5486c37
Author: anup36 <anuppanwar@Hacker.local>
Date:   Mon Aug 22 13:37:22 2016 +0530

    adding religare.s

commit 88ee2fd16a0f8c9b11b6eb42b2c790a233e3b8a6
Author: anup36 <anup.panwar36@gmail.com>
Date:   Wed Nov 25 23:09:05 2015 +0530

    C compile code

commit 53b036ae6d81ddd3414f45fa3c3b7ebedab9e891
Author: anup36 <anup.panwar36@gmail.com>
Date:   Wed Nov 25 21:53:02 2015 +0530

    www files  error

commit 9d0f1237ced4c3dec01d9013a0a457197560022d
Author: anup36 <anup.panwar36@gmail.com>
Date:   Wed Nov 25 21:39:52 2015 +0530

    RUby compiling

commit bf4f64e6732c942839319d01b3fca2184a2c0378
Author: anup36 <anup.panwar36@gmail.com>
Date:   Sat Nov 21 20:35:11 2015 +0530

    After reset am hoping this  will work

commit e655fbcbafd40bfcee189902c4dcfb1c77e3f8c9
Author: anup36 <anup.panwar36@gmail.com>
Date:   Sat Nov 21 19:25:56 2015 +0530

    error resolved

commit 66843f3eece7fa81f71a85b53cb12748e927ab4d
Author: anup36 <anup.panwar36@gmail.com>
Date:   Sat Nov 21 18:49:57 2015 +0530

    nodejs api code

commit 9f48fb1f32dd2ea21c7363511955e6ee3cc486ca
Author: anup36 <anup.panwar36@gmail.com>
Date:   Fri Nov 20 15:11:48 2015 +0530

    New origin master code

commit 8ab0155331a3bfba0737b34a22037194e94e2a62
Author: anup36 <anup.panwar36@gmail.com>
Date:   Fri Nov 20 14:59:46 2015 +0530

    New Protype inheritance based code and rangoli update, perfect python compiling code

commit 37041b8a66f8ad2d8db8141dd4b217b5ef315f6d
Author: anup36 <anup.panwar36@gmail.com>
Date:   Thu Nov 19 18:45:49 2015 +0530

    comiple module add In future i'll add my compile code on it

commit 037aa99d58d938541b388bbd2b9a1b40a36cde30
Author: anup36 <anup.panwar36@gmail.com>
Date:   Wed Nov 18 00:12:24 2015 +0530

    changes on www and html file

commit 6e7812e47e294b0870c02f79460fe9c11049dbeb
Author: anup36 <anup.panwar36@gmail.com>
Date:   Tue Nov 17 21:11:32 2015 +0530

    dfd

commit 8d73d32aa43a3fcfa19195268e07059608644e8e
Author: anup36 <anup.panwar36@gmail.com>
Date:   Tue Nov 17 20:16:37 2015 +0530

    Changes on app.js and www so that work on server

commit da9f159430d4fbaa76ace225f0d1d12706009766
Author: anup36 <anup.panwar36@gmail.com>
Date:   Tue Nov 17 19:33:10 2015 +0530

    REsponse changes res.json()

commit 18fd84500ac2df4b479657ee161b046d5f9d319f
Author: anup36 <anup.panwar36@gmail.com>
Date:   Tue Nov 17 19:21:59 2015 +0530

    Codelinkster API Full Code on Express
