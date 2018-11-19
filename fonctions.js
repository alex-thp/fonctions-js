var my_max = function(param1)
	{
		var i = param1.length
		var j = 0
		var k = 0
        while (j < i)
        {
        	if (k < param1[j])
        	{
        		k = param1[j]
        		j++;
        	}
        	else 
        	{
        		j++;
        	}
        }
		return console.log(k)
	}
my_max([1,9,5,2])

var vowel_count = function(string)
	{
		var i = string.length
		var k = ["a","e","i","o","u","y"]
		var j = 0
		var l = 0
		var count = 0

		while (j < i)
		{
			l = 0
			while (l < k.length)
			{
				if (string[j] == k[l])
				{
					count = count + 1
					l++;
				}
				else 
				{
					l++;
				}
			} 
			j++;
		}
		return count
	}

console.log(vowel_count("narvallo for ever"))

var reverse = function(string)
{
	var i = string.length
	var k = Array
	var l = string.length - 1
	var j = 0

	while (j < i)
	{
        k[l] = string[j]
        l--;
		j++;
	}
	return k
}

console.log(reverse("Salut les terriens !"))