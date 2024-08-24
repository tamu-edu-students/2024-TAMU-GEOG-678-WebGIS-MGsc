import csv

inputFile = r'02_21.csv'

#easy

with open(inputFile) as csvfile:
    readCSV = csv.reader(csvfile, delimiter='\t')
    i = 0 
    for row in readCSV:
        if i == 0:
            i+=1;
            print("# Easy")
            continue
        i+=1
        qString = ''
        rList = row[0].split(',')
        if rList.index("Question ID 4")-rList.index("Enter your text for question 1.") > 1:
                index = rList.index("Enter your text for question 1.")
                while index+1 != rList.index("Question ID 4"):
                    qString += rList[index+1]
                    index +=1
        else: qString = rList[rList.index("Enter your text for question 2.")+1]  
        print("**Q"+ str(i-1) +" "+qString.replace('"',"")+ "<br/>**")
        aIndex = rList.index("Question ID 5")
        if row[0].replace(", "," ").split(",")[aIndex-2].replace('"',"") != "Question ID 5" and row[0].replace(", "," ").split(",")[aIndex-1].replace('"',"") != "Question ID 5":
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-4].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-3].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-2].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-1].replace('"',""))
        elif row[0].replace(", "," ").split(",")[aIndex-1].replace('"',"") == "Question ID 5":
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-5].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-4].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-3].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-2].replace('"',""))
        elif row[0].replace(", "," ").split(",")[aIndex-2].replace('"',"") == "Question ID 5":
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-6].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-5].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-4].replace('"',""))
            print("> - "+row[0].replace(", "," ").split(",")[aIndex-3].replace('"',""))
        print("    ")
        
#medium

with open(inputFile) as csvfile:
    readCSV = csv.reader(csvfile, delimiter='\t')
    i = 0 
    for row in readCSV:
        if i==0:
            i+=1
            print("# Medium")
            continue
        i+=1
        qString = ''
        rList = row[0].split(',')
        if rList.index("Question ID 6")-rList.index("Enter your text for question 2.") > 1:
                index = rList.index("Enter your text for question 2.")
                while index+1 != rList.index("Question ID 6"):
                    qString += rList[index+1]
                    index +=1
        else: qString = rList[rList.index("Enter your text for question 2.")+1]
        print("**Q"+ str(i-1) +" "+qString.replace('"',"")+ "<br/>**")
        qAnswer = ''
        if rList.index("Question ID 7")-rList.index("Enter your answer for question 2.") > 1:
            aIndex = rList.index("Enter your answer for question 2.")
            while aIndex+1 != rList.index("Question ID 7"):
                    qAnswer += rList[aIndex+1]
                    aIndex +=1
        else: qAnswer = rList[rList.index("Question ID 7")-1]
        print("> - "+ qAnswer.replace('"',""))
        print("    ")
       

#hard

with open(inputFile) as csvfile:
    readCSV = csv.reader(csvfile, delimiter='\t')
    i = 0 
    for row in readCSV:
        if i==0:
            print("# Hard")
            i+=1
            continue
        i+=1
        qString = ''
        rList = row[0].split(',')
        if rList.index("Question ID 8")-rList.index("Enter your text for question 3.") > 1:
                index = rList.index("Enter your text for question 3.")
                while index+1 != rList.index("Question ID 8"):
                    qString += rList[index+1]
                    index +=1
        else: qString = rList[rList.index("Enter your text for question 3.")+1]
        print("**Q"+ str(i-1) +" "+qString.replace('"',"")+ "<br/>**")
        qAnswer = ''
        if rList.index("Question ID 8")-rList.index("Enter your text for question 3.") > 1:
            aIndex = rList.index("Enter your answer for question 3.")
            while aIndex != len(rList)-1:
                    qAnswer += rList[aIndex+1]
                    aIndex +=1
        else: qAnswer = rList[-1]
        print("> - "+ qAnswer.replace('"',""))
        print("    ")
