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

