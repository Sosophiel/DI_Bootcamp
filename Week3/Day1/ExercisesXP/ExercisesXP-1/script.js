
    const firstDiv = document.body.firstElementChild;
    console.log(firstDiv)


    let list1 = document.body.children[1]
	list1.children[0].innerText="Richard"
	console.log(list1)

	list1.children[0].innerText="Sophie"

    let list2 = document.body.children[2]
	list2.children[0].innerText="Sophie"

	list2.children[1].remove()

	list1.classList.add("student_list")
	list2.classList.add("student_list")

	list1.classList.add("university")
	list1.classList.add("attendance")

