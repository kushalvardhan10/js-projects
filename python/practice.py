# a=int(input())
# b=int(input())
# c=int(input())
# maxi=mini=a
# if b>maxi:
#     maxi=b
# if c>maxi:
#     maxi=c  
# if b<mini:
#     mini=b
# if c<mini:
#     mini=c
# print(maxi) 
# print(mini) 


# def fib (n):
#     if n<=1:
#         return n
#     else:
#         return fib(n-1)+fib(n-2)
# print(fib(4))        
# for i in range(5):
#     print(fib(i))   


# def fac(n):
#     if n==0:
#         return 1
#     else:
#         return n*fac(n-1)
# print(fac(5))    
# for i in range(int(input())):
#     print(fac(i))
    
# def palin(s):
#     return s==s[::-1]
# s=str(input())
# print('palin' if s==s[::-1] else "not palin")
# print('palin',palin(s))
# s=str(input())
# count=0
# for i in s:
#     if i.islower():
#         count+=1
# print(count)    
# list1=[8,2,13,4,15]
# list2=[6,2,8,4,10]
# list1.extend(list2)
# list1.sort()
# print(list1)
# print(list(set(list1)))
# list1=[11,2,2,3,3,4,4,5,5]
# list2=[]
# for i in list1:
#     if i not in list2:
#         list2.append(i)
# print(list1)
# print(list2)        
# l=[]
# a =int(input())
# for i in range(a):
#     l.append((i,i*i))
# print(l)    
# d={1:'menu',2:'usha',3:'dash'}
# print('dict',d)
# print('keys',d.keys())
# print('values',d.values())
# print('items',d.items())
# print('pop',d.pop(2))
# del d[1]
# print(d)
# d[4]='four'
# print(d)

# my_dict={'a':1,'b':2,'c':3}
# mapp={v:k for k,v in my_dict.items() }
# print(mapp)
# from tkinter import*
# def submit():
#     print('submited')
# root=Tk()
# label1=Label(root,text='hello',bg='green',fg='red')
# label1.pack()
# heading=Label(root,text='enter your name:')
# heading.pack()
# entry=Entry(root)
# entry.pack()
# button=Button(root,text='submit',command=submit)
# button.pack()
# root.mainloop()

# import tkinter as tk 
# root=tk.Tk() 
# root.title("Button") 
# root.geometry("400x300") 
# w=tk.Label(root,text="Radio Button") 
# w.pack() 
# gender = tk.StringVar() 
# gender.set("None") 
# h=tk.Label(root, text="Select your gender:", font=('Times New Roman', 12)) 
# h.pack() 
# rb1 = tk.Radiobutton(root, text="Male", variable=gender, value="Male",bg='grey') 
# rb2 = tk.Radiobutton(root, text="Female", variable=gender, value="Female",bg='grey')
# rb3 = tk.Radiobutton(root, text="Other", variable=gender, value="Other",bg='grey') 
# rb1.pack(pady=5) 
# rb2.pack(pady=5) 
# rb3.pack(pady=5) 
# r=tk.Label(root,text="Select your hobbies") 
# r.pack() 
# var1=tk.IntVar(value=0)
# var2=tk.IntVar(value=0)
# var3=tk.IntVar(value=0)
# cb1=tk.Checkbutton(root,text="Singing",bg='yellow',variable=var1,command) 
# cb2=tk.Checkbutton(root,text="Playing",bg='orange',variable=var2) 
# cb3=tk.Checkbutton(root,text="Travelling",bg='lightgreen',variable=var3) 
# cb1.pack(pady=5) 
# cb2.pack(pady=5) 
# cb3.pack(pady=5) 
# root.mainloop()
